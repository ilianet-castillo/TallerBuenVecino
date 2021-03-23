package api.invoice;

import api.description.EntityDescription;
import com.itextpdf.text.*;
import com.itextpdf.text.pdf.PdfPCell;
import com.itextpdf.text.pdf.PdfPTable;
import com.itextpdf.text.pdf.PdfPageEventHelper;
import com.itextpdf.text.pdf.PdfWriter;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class ServiceInvoice {

    private static final Logger logger = LoggerFactory.getLogger(ServiceInvoice.class);

    @Value("classpath:img/header.png")
    private Resource headerImg;

    @Value("classpath:img/footer.png")
    private Resource footerImg;

    @Autowired
    private RepositoryInvoice repositoryInvoice;

    public EntityInvoice save(EntityInvoice invoice) {
        invoice.setActivityDate(new Date());
        return repositoryInvoice.save(invoice);
    }

    public Optional<EntityInvoice> getForId(int id) {
        return repositoryInvoice.findById(id);
    }

    public Optional<EntityInvoice> update(int id, EntityInvoice invoice) {
        return getForId(id).map(record -> {
            record.setInvoiceType(invoice.getInvoiceType());
            record.setContact(invoice.getContact());
            record.setActivityClient(invoice.getActivityClient());
            record.setActivityVehicle(invoice.getActivityVehicle());
            record.setActivityReferenceOt(invoice.getActivityReferenceOt());
            record.setEmployeeInvoice(invoice.getEmployeeInvoice());
            return save(record);
        });
    }

    public Optional<EntityInvoice> delete(int id) {
        return getForId(id).map(record -> {
            repositoryInvoice.delete(record);
            return record;
        });
    }

    public List<EntityInvoice> listAll() {
        return repositoryInvoice.findAll();
    }

    public ByteArrayInputStream getInvoicePDF(int id) {
        EntityInvoice invoice = getForId(id).get();

        Document document = new Document(PageSize.LETTER, 48f, 48f, 102f, 81);
        ByteArrayOutputStream out = new ByteArrayOutputStream();

        try {
            PdfWriter writer = PdfWriter.getInstance(document, out);
            writer.setPageEvent(new HeaderFooterPageEvent(headerImg, footerImg));
            document.open();

            Paragraph element;
            element = new Paragraph();
            element.setAlignment(Element.ALIGN_CENTER);
            element.setFont(FontFactory.getFont(FontFactory.TIMES, 22));
            element.add(invoice.getInvoiceType().getTitle());
            document.add(element);

            element = new Paragraph();
            element.setAlignment(Element.ALIGN_CENTER);
            element.setFont(FontFactory.getFont(FontFactory.TIMES, 11));
            element.add(" ");
            document.add(element);

            PdfPTable table = new PdfPTable(new float[]{10, 40, 15, 35});
            table.setHorizontalAlignment(Element.ALIGN_CENTER);
            table.setWidthPercentage(100);

            PdfPCell cell;
            cell = new PdfPCell(new Phrase("Nombre: ", FontFactory.getFont(FontFactory.TIMES_BOLD, 9)));
            cell.setHorizontalAlignment(Element.ALIGN_RIGHT);
            cell.setBorder(0);
            table.addCell(cell);

            cell = new PdfPCell(new Phrase(invoice.getContact().getName(), FontFactory.getFont(FontFactory.TIMES, 9)));
            cell.setHorizontalAlignment(Element.ALIGN_LEFT);
            cell.setBorder(0);
            table.addCell(cell);

            cell = new PdfPCell(new Phrase("TCP: ", FontFactory.getFont(FontFactory.TIMES_BOLD, 9)));
            cell.setHorizontalAlignment(Element.ALIGN_RIGHT);
            cell.setBorder(0);
            table.addCell(cell);

            cell = new PdfPCell(new Phrase(invoice.getContact().getTcp(), FontFactory.getFont(FontFactory.TIMES, 9)));
            cell.setHorizontalAlignment(Element.ALIGN_LEFT);
            cell.setBorder(0);
            table.addCell(cell);

            cell = new PdfPCell(new Phrase("Dirección: ", FontFactory.getFont(FontFactory.TIMES_BOLD, 9)));
            cell.setHorizontalAlignment(Element.ALIGN_RIGHT);
            cell.setBorder(0);
            table.addCell(cell);

            cell = new PdfPCell(new Phrase(invoice.getContact().getAddress(), FontFactory.getFont(FontFactory.TIMES, 9)));
            cell.setHorizontalAlignment(Element.ALIGN_LEFT);
            cell.setBorder(0);
            table.addCell(cell);

            cell = new PdfPCell(new Phrase("NIT: ", FontFactory.getFont(FontFactory.TIMES_BOLD, 9)));
            cell.setHorizontalAlignment(Element.ALIGN_RIGHT);
            cell.setBorder(0);
            table.addCell(cell);

            cell = new PdfPCell(new Phrase(String.valueOf(invoice.getContact().getNit()), FontFactory.getFont(FontFactory.TIMES, 9)));
            cell.setHorizontalAlignment(Element.ALIGN_LEFT);
            cell.setBorder(0);
            table.addCell(cell);

            cell = new PdfPCell(new Phrase("Email: ", FontFactory.getFont(FontFactory.TIMES_BOLD, 9)));
            cell.setHorizontalAlignment(Element.ALIGN_RIGHT);
            cell.setBorder(0);
            table.addCell(cell);

            cell = new PdfPCell(new Phrase(invoice.getContact().getEmail(), FontFactory.getFont(FontFactory.TIMES, 9)));
            cell.setHorizontalAlignment(Element.ALIGN_LEFT);
            cell.setBorder(0);
            table.addCell(cell);

            cell = new PdfPCell(new Phrase("No. cuenta CUP: ", FontFactory.getFont(FontFactory.TIMES_BOLD, 9)));
            cell.setHorizontalAlignment(Element.ALIGN_RIGHT);
            cell.setBorder(0);
            table.addCell(cell);

            cell = new PdfPCell(new Phrase(String.valueOf(invoice.getContact().getAccountNumberCUP()), FontFactory.getFont(FontFactory.TIMES, 9)));
            cell.setHorizontalAlignment(Element.ALIGN_LEFT);
            cell.setBorder(0);
            table.addCell(cell);

            cell = new PdfPCell(new Phrase("Teléfono: ", FontFactory.getFont(FontFactory.TIMES_BOLD, 9)));
            cell.setHorizontalAlignment(Element.ALIGN_RIGHT);
            cell.setBorder(0);
            table.addCell(cell);

            cell = new PdfPCell(new Phrase(String.valueOf(invoice.getContact().getPhone()), FontFactory.getFont(FontFactory.TIMES, 9)));
            cell.setHorizontalAlignment(Element.ALIGN_LEFT);
            cell.setBorder(0);
            table.addCell(cell);

            cell = new PdfPCell(new Phrase("No. cuenta CUC: ", FontFactory.getFont(FontFactory.TIMES_BOLD, 9)));
            cell.setHorizontalAlignment(Element.ALIGN_RIGHT);
            cell.setBorder(0);
            table.addCell(cell);

            cell = new PdfPCell(new Phrase(String.valueOf(invoice.getContact().getAccountNumberCUC()), FontFactory.getFont(FontFactory.TIMES, 9)));
            cell.setHorizontalAlignment(Element.ALIGN_LEFT);
            cell.setBorder(0);
            table.addCell(cell);
            document.add(table);

            element = new Paragraph();
            element.setAlignment(Element.ALIGN_LEFT);
            element.setFont(FontFactory.getFont(FontFactory.TIMES, 9));
            element.add(" ");
            document.add(element);

            element = new Paragraph();
            element.setAlignment(Element.ALIGN_CENTER);
            element.add(new Phrase("Nombre de la Actividad: ", FontFactory.getFont(FontFactory.TIMES_BOLD, 11)));
            element.add(new Phrase("Reparación de Equipos Mecánicos y de Combustión", FontFactory.getFont(FontFactory.TIMES, 11)));
            document.add(element);

            element = new Paragraph();
            element.setAlignment(Element.ALIGN_LEFT);
            element.setFont(FontFactory.getFont(FontFactory.TIMES, 11));
            element.add(" ");
            document.add(element);

            table = new PdfPTable(2);
            table.setHorizontalAlignment(Element.ALIGN_CENTER);
            table.setWidthPercentage(100);

            cell = new PdfPCell(new Phrase("Datos del Cliente:", FontFactory.getFont(FontFactory.TIMES_BOLD, 10)));
            cell.setHorizontalAlignment(Element.ALIGN_CENTER);
            table.addCell(cell);

            cell = new PdfPCell(new Phrase("Del Servicio:", FontFactory.getFont(FontFactory.TIMES_BOLD, 10)));
            cell.setHorizontalAlignment(Element.ALIGN_CENTER);
            table.addCell(cell);
            document.add(table);

            table = new PdfPTable(new float[]{10, 40, 16, 34});
            table.setHorizontalAlignment(Element.ALIGN_CENTER);
            table.setWidthPercentage(100);

            cell = new PdfPCell(new Phrase("Nombre:", FontFactory.getFont(FontFactory.TIMES_BOLD, 9)));
            cell.setHorizontalAlignment(Element.ALIGN_RIGHT);
            table.addCell(cell);

            cell = new PdfPCell(new Phrase(invoice.getActivityClient().getEnterpriseName(), FontFactory.getFont(FontFactory.TIMES, 9)));
            cell.setHorizontalAlignment(Element.ALIGN_LEFT);
            table.addCell(cell);

            cell = new PdfPCell(new Phrase("No. Factura:", FontFactory.getFont(FontFactory.TIMES_BOLD, 9)));
            cell.setHorizontalAlignment(Element.ALIGN_RIGHT);
            table.addCell(cell);

            cell = new PdfPCell(new Phrase(String.valueOf(invoice.getId()), FontFactory.getFont(FontFactory.TIMES, 9)));
            cell.setHorizontalAlignment(Element.ALIGN_LEFT);
            table.addCell(cell);

            cell = new PdfPCell(new Phrase("Domicilio:", FontFactory.getFont(FontFactory.TIMES_BOLD, 9)));
            cell.setHorizontalAlignment(Element.ALIGN_RIGHT);
            table.addCell(cell);

            cell = new PdfPCell(new Phrase(invoice.getActivityClient().getAddress(), FontFactory.getFont(FontFactory.TIMES, 9)));
            cell.setHorizontalAlignment(Element.ALIGN_LEFT);
            table.addCell(cell);

            cell = new PdfPCell(new Phrase("Referencia OT No:", FontFactory.getFont(FontFactory.TIMES_BOLD, 9)));
            cell.setHorizontalAlignment(Element.ALIGN_RIGHT);
            table.addCell(cell);

            cell = new PdfPCell(new Phrase(String.valueOf(invoice.getActivityReferenceOt()), FontFactory.getFont(FontFactory.TIMES, 9)));
            cell.setHorizontalAlignment(Element.ALIGN_LEFT);
            table.addCell(cell);

            cell = new PdfPCell(new Phrase("Teléfono:", FontFactory.getFont(FontFactory.TIMES_BOLD, 9)));
            cell.setHorizontalAlignment(Element.ALIGN_RIGHT);
            table.addCell(cell);

            cell = new PdfPCell(new Phrase(String.valueOf(invoice.getActivityClient().getPhone()), FontFactory.getFont(FontFactory.TIMES, 9)));
            cell.setHorizontalAlignment(Element.ALIGN_LEFT);
            table.addCell(cell);

            cell = new PdfPCell(new Phrase("No. Factura OT No:", FontFactory.getFont(FontFactory.TIMES_BOLD, 9)));
            cell.setHorizontalAlignment(Element.ALIGN_RIGHT);
            table.addCell(cell);

            cell = new PdfPCell(new Phrase(invoice.getId() + " - " + invoice.getActivityReferenceOt(), FontFactory.getFont(FontFactory.TIMES, 9)));
            cell.setHorizontalAlignment(Element.ALIGN_LEFT);
            table.addCell(cell);

            cell = new PdfPCell(new Phrase("Vehículo:", FontFactory.getFont(FontFactory.TIMES_BOLD, 9)));
            cell.setHorizontalAlignment(Element.ALIGN_RIGHT);
            table.addCell(cell);

            cell = new PdfPCell(new Phrase(invoice.getActivityVehicle().getMarkModel(), FontFactory.getFont(FontFactory.TIMES, 9)));
            cell.setHorizontalAlignment(Element.ALIGN_LEFT);
            table.addCell(cell);

            cell = new PdfPCell(new Phrase("Fecha:", FontFactory.getFont(FontFactory.TIMES_BOLD, 9)));
            cell.setHorizontalAlignment(Element.ALIGN_RIGHT);
            table.addCell(cell);

            cell = new PdfPCell(new Phrase(invoice.getActivityDate().toString(), FontFactory.getFont(FontFactory.TIMES, 9)));
            cell.setHorizontalAlignment(Element.ALIGN_LEFT);
            table.addCell(cell);

            cell = new PdfPCell(new Phrase("Chapa:", FontFactory.getFont(FontFactory.TIMES_BOLD, 9)));
            cell.setHorizontalAlignment(Element.ALIGN_RIGHT);
            table.addCell(cell);

            cell = new PdfPCell(new Phrase(invoice.getActivityVehicle().getSheet(), FontFactory.getFont(FontFactory.TIMES, 9)));
            cell.setHorizontalAlignment(Element.ALIGN_LEFT);
            table.addCell(cell);

            cell = new PdfPCell(new Phrase("Moneda:", FontFactory.getFont(FontFactory.TIMES_BOLD, 9)));
            cell.setHorizontalAlignment(Element.ALIGN_RIGHT);
            table.addCell(cell);

            cell = new PdfPCell(new Phrase("CUP", FontFactory.getFont(FontFactory.TIMES, 9)));
            cell.setHorizontalAlignment(Element.ALIGN_LEFT);
            table.addCell(cell);
            document.add(table);

            element = new Paragraph();
            element.setAlignment(Element.ALIGN_LEFT);
            element.setFont(FontFactory.getFont(FontFactory.TIMES, 11));
            element.add(" ");
            document.add(element);

            table = new PdfPTable(new float[]{5, 85, 10});
            table.setHorizontalAlignment(Element.ALIGN_CENTER);
            table.setWidthPercentage(100);

            cell = new PdfPCell(new Phrase("No.", FontFactory.getFont(FontFactory.TIMES, 10)));
            cell.setHorizontalAlignment(Element.ALIGN_LEFT);
            table.addCell(cell);

            cell = new PdfPCell(new Phrase("Descripción de los trabajos realizado: ", FontFactory.getFont(FontFactory.TIMES_BOLD, 10)));
            cell.setHorizontalAlignment(Element.ALIGN_LEFT);
            table.addCell(cell);

            cell = new PdfPCell(new Phrase("Importe:", FontFactory.getFont(FontFactory.TIMES_BOLD, 10)));
            cell.setHorizontalAlignment(Element.ALIGN_LEFT);
            table.addCell(cell);

            double total = 0;
            for (int i = 0; i < invoice.getDescriptions().size(); i++) {
                EntityDescription description = invoice.getDescriptions().get(i);

                cell = new PdfPCell(new Phrase(String.valueOf(i + 1), FontFactory.getFont(FontFactory.TIMES, 10)));
                cell.setHorizontalAlignment(Element.ALIGN_CENTER);
                table.addCell(cell);

                cell = new PdfPCell(new Phrase(description.getWorkDescription(), FontFactory.getFont(FontFactory.TIMES, 10)));
                cell.setHorizontalAlignment(Element.ALIGN_LEFT);
                table.addCell(cell);

                cell = new PdfPCell(new Phrase(String.valueOf(description.getAmount()), FontFactory.getFont(FontFactory.TIMES, 10)));
                cell.setHorizontalAlignment(Element.ALIGN_CENTER);
                table.addCell(cell);

                total += description.getAmount();
            }
            document.add(table);

            table = new PdfPTable(new float[]{90, 10});
            table.setHorizontalAlignment(Element.ALIGN_CENTER);
            table.setWidthPercentage(100);

            cell = new PdfPCell(new Phrase("TOTAL", FontFactory.getFont(FontFactory.TIMES, 10)));
            cell.setHorizontalAlignment(Element.ALIGN_CENTER);
            table.addCell(cell);

            cell = new PdfPCell(new Phrase(String.valueOf(total), FontFactory.getFont(FontFactory.TIMES, 10)));
            cell.setHorizontalAlignment(Element.ALIGN_CENTER);
            table.addCell(cell);
            document.add(table);

            element = new Paragraph();
            element.setAlignment(Element.ALIGN_LEFT);
            element.setFont(FontFactory.getFont(FontFactory.TIMES, 11));
            element.add(" ");
            document.add(element);

            table = new PdfPTable(new float[]{15, 35, 15, 35});
            table.setHorizontalAlignment(Element.ALIGN_CENTER);
            table.setWidthPercentage(100);

            cell = new PdfPCell(new Phrase("Facturado por: ", FontFactory.getFont(FontFactory.TIMES_BOLD, 11)));
            cell.setHorizontalAlignment(Element.ALIGN_RIGHT);
            cell.setBorder(0);
            table.addCell(cell);

            cell = new PdfPCell(new Phrase(invoice.getEmployeeInvoice().getName(), FontFactory.getFont(FontFactory.TIMES, 11)));
            cell.setHorizontalAlignment(Element.ALIGN_LEFT);
            cell.setBorder(0);
            table.addCell(cell);

            cell = new PdfPCell(new Phrase("Recibido por: ", FontFactory.getFont(FontFactory.TIMES_BOLD, 11)));
            cell.setHorizontalAlignment(Element.ALIGN_RIGHT);
            cell.setBorder(0);
            table.addCell(cell);

            cell = new PdfPCell(new Phrase("______________________________", FontFactory.getFont(FontFactory.TIMES, 11)));
            cell.setHorizontalAlignment(Element.ALIGN_LEFT);
            cell.setBorder(0);
            table.addCell(cell);

            cell = new PdfPCell(new Phrase("Cargo: ", FontFactory.getFont(FontFactory.TIMES_BOLD, 11)));
            cell.setHorizontalAlignment(Element.ALIGN_RIGHT);
            cell.setBorder(0);
            table.addCell(cell);

            cell = new PdfPCell(new Phrase(invoice.getEmployeeInvoice().getPosition().getName(), FontFactory.getFont(FontFactory.TIMES, 11)));
            cell.setHorizontalAlignment(Element.ALIGN_LEFT);
            cell.setBorder(0);
            table.addCell(cell);

            cell = new PdfPCell(new Phrase("Cargo: ", FontFactory.getFont(FontFactory.TIMES_BOLD, 11)));
            cell.setHorizontalAlignment(Element.ALIGN_RIGHT);
            cell.setBorder(0);
            table.addCell(cell);

            cell = new PdfPCell(new Phrase("______________________________", FontFactory.getFont(FontFactory.TIMES, 11)));
            cell.setHorizontalAlignment(Element.ALIGN_LEFT);
            cell.setBorder(0);
            table.addCell(cell);

            cell = new PdfPCell(new Phrase("Fecha: ", FontFactory.getFont(FontFactory.TIMES_BOLD, 11)));
            cell.setHorizontalAlignment(Element.ALIGN_RIGHT);
            cell.setBorder(0);
            table.addCell(cell);

            cell = new PdfPCell(new Phrase(String.valueOf(new Date()), FontFactory.getFont(FontFactory.TIMES, 11)));
            cell.setHorizontalAlignment(Element.ALIGN_LEFT);
            cell.setBorder(0);
            table.addCell(cell);

            cell = new PdfPCell(new Phrase("Fecha: ", FontFactory.getFont(FontFactory.TIMES_BOLD, 11)));
            cell.setHorizontalAlignment(Element.ALIGN_RIGHT);
            cell.setBorder(0);
            table.addCell(cell);

            cell = new PdfPCell(new Phrase("______________________________", FontFactory.getFont(FontFactory.TIMES, 11)));
            cell.setHorizontalAlignment(Element.ALIGN_LEFT);
            cell.setBorder(0);
            table.addCell(cell);

            cell = new PdfPCell(new Phrase("Firma: ", FontFactory.getFont(FontFactory.TIMES_BOLD, 11)));
            cell.setHorizontalAlignment(Element.ALIGN_RIGHT);
            cell.setBorder(0);
            table.addCell(cell);

            cell = new PdfPCell(new Phrase("______________________________", FontFactory.getFont(FontFactory.TIMES, 11)));
            cell.setHorizontalAlignment(Element.ALIGN_LEFT);
            cell.setBorder(0);
            table.addCell(cell);

            cell = new PdfPCell(new Phrase("Firma: ", FontFactory.getFont(FontFactory.TIMES_BOLD, 11)));
            cell.setHorizontalAlignment(Element.ALIGN_RIGHT);
            cell.setBorder(0);
            table.addCell(cell);

            cell = new PdfPCell(new Phrase("______________________________", FontFactory.getFont(FontFactory.TIMES, 11)));
            cell.setHorizontalAlignment(Element.ALIGN_LEFT);
            cell.setBorder(0);
            table.addCell(cell);
            document.add(table);

            document.close();
        } catch (DocumentException ex) {
            logger.error("Error occurred: {0}", ex);
        }

        return new ByteArrayInputStream(out.toByteArray());
    }

    class HeaderFooterPageEvent extends PdfPageEventHelper {

        private Resource headerImg;

        private Resource footerImg;

        public HeaderFooterPageEvent(Resource headerImg, Resource footerImg) {
            this.headerImg = headerImg;
            this.footerImg = footerImg;
        }

        @Override
        public void onStartPage(PdfWriter writer, Document document) {
            try {
                Image image = Image.getInstance(headerImg.getURL());
                image.setAlignment(Element.ALIGN_CENTER);
                image.setAbsolutePosition(0, document.top());
                image.scalePercent(24f);
                writer.getDirectContent().addImage(image);
            } catch (IOException | DocumentException e) {
                System.err.println(e);
            }
        }

        @Override
        public void onEndPage(PdfWriter writer, Document document) {
            try {
                Image image = Image.getInstance(footerImg.getURL());
                image.setAlignment(Element.ALIGN_CENTER);
                image.setAbsolutePosition(0, 0);
                image.scalePercent(24f);
                writer.getDirectContent().addImage(image);
            } catch (IOException | DocumentException e) {
                System.err.println(e);
            }
        }

    }

}
