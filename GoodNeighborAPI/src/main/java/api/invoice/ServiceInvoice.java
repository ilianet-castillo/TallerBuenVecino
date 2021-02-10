package api.invoice;

import com.itextpdf.text.*;
import com.itextpdf.text.pdf.PdfPCell;
import com.itextpdf.text.pdf.PdfPTable;
import com.itextpdf.text.pdf.PdfWriter;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class ServiceInvoice {

    private static final Logger logger = LoggerFactory.getLogger(ServiceInvoice.class);

    @Autowired
    private RepositoryInvoice repositoryInvoice;

    public EntityInvoice save(EntityInvoice invoice) {
        return repositoryInvoice.save(invoice);
    }

    public Optional<EntityInvoice> getForId(int id) {
        return repositoryInvoice.findById(id);
    }

    public Optional<EntityInvoice> update(int id, EntityInvoice invoice) {
        return getForId(id).map(record -> {
            record.setActivity(invoice.getActivity());
            record.setContact(invoice.getContact());
            record.setDate(invoice.getDate());
            record.setEmployee(invoice.getEmployee());
            record.setSignature(invoice.getSignature());
            record.setType(invoice.getType());
            record.setClient(invoice.getClient());
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

        Document document = new Document();
        ByteArrayOutputStream out = new ByteArrayOutputStream();

        try {
            PdfWriter.getInstance(document, out);
            document.open();

            Paragraph element;
            element = new Paragraph();
            element.setAlignment(Element.ALIGN_CENTER);
            element.setFont(FontFactory.getFont(FontFactory.TIMES, 22));
            element.add(invoice.getType().getTitle());
            document.add(element);

            element = new Paragraph();
            element.setAlignment(Element.ALIGN_CENTER);
            element.setFont(FontFactory.getFont(FontFactory.TIMES, 11));
            element.add(" ");
            document.add(element);

            PdfPTable table = new PdfPTable(4);
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

            cell = new PdfPCell(new Phrase(invoice.getContact().getNit(), FontFactory.getFont(FontFactory.TIMES, 9)));
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

            cell = new PdfPCell(new Phrase(invoice.getContact().getAccountNumberCUP(), FontFactory.getFont(FontFactory.TIMES, 9)));
            cell.setHorizontalAlignment(Element.ALIGN_LEFT);
            cell.setBorder(0);
            table.addCell(cell);

            cell = new PdfPCell(new Phrase("Teléfono: ", FontFactory.getFont(FontFactory.TIMES_BOLD, 9)));
            cell.setHorizontalAlignment(Element.ALIGN_RIGHT);
            cell.setBorder(0);
            table.addCell(cell);

            cell = new PdfPCell(new Phrase(invoice.getContact().getPhone(), FontFactory.getFont(FontFactory.TIMES, 9)));
            cell.setHorizontalAlignment(Element.ALIGN_LEFT);
            cell.setBorder(0);
            table.addCell(cell);

            cell = new PdfPCell(new Phrase("No. cuenta CUC: ", FontFactory.getFont(FontFactory.TIMES_BOLD, 9)));
            cell.setHorizontalAlignment(Element.ALIGN_RIGHT);
            cell.setBorder(0);
            table.addCell(cell);

            cell = new PdfPCell(new Phrase(invoice.getContact().getAccountNumberCUC(), FontFactory.getFont(FontFactory.TIMES, 9)));
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
            element.add(new Phrase(invoice.getActivity().getName(), FontFactory.getFont(FontFactory.TIMES, 11)));
            document.add(element);
//
//            element = new Paragraph();
//            element.setAlignment(Element.ALIGN_LEFT);
//            element.add(new Phrase("Nombre: ", FontFactory.getFont(FontFactory.TIMES_BOLD)));
//            element.add(new Phrase(invoice.getFecha().toString().substring(0, 10), FontFactory.getFont(FontFactory.TIMES)));
//            document.add(element);
//
//            element = new Paragraph();
//            element.setAlignment(Element.ALIGN_LEFT);
//            element.add(new Phrase("Lugar: ", FontFactory.getFont(FontFactory.TIMES_BOLD)));
//            element.add(new Phrase(activoAlumno.getLugar(), FontFactory.getFont(FontFactory.TIMES)));
//            document.add(element);
//
//            element = new Paragraph();
//            element.setAlignment(Element.ALIGN_LEFT);
//            element.add(new Phrase("Hora: ", FontFactory.getFont(FontFactory.TIMES_BOLD)));
//            element.add(new Phrase(activoAlumno.getHora().toString(), FontFactory.getFont(FontFactory.TIMES)));
//            document.add(element);
//
//            element = new Paragraph();
//            element.add(" ");
//            document.add(element);
//
//            element = new Paragraph();
//            element.setAlignment(Element.ALIGN_LEFT);
//            element.setFont(FontFactory.getFont(FontFactory.TIMES_BOLD));
//            element.add("Asistencia:");
//            document.add(element);
//
//            element = new Paragraph();
//            element.setAlignment(Element.ALIGN_LEFT);
//            element.setFont(FontFactory.getFont(FontFactory.TIMES_BOLD));
//            element.add("Profesores:");
//            document.add(element);
//
//            for (EntidadProfesor profesor : activoAlumno.getProfesores()) {
//                element = new Paragraph();
//                element.setAlignment(Element.ALIGN_LEFT);
//                element.setFont(FontFactory.getFont(FontFactory.TIMES));
//                element.add("*" + profesor.getNombre() + " " + profesor.getApellidos() + " (" + profesor.getFacultad().getNombre() + ")");
//                document.add(element);
//            }
//
//            element = new Paragraph();
//            element.setAlignment(Element.ALIGN_LEFT);
//            element.setFont(FontFactory.getFont(FontFactory.TIMES_BOLD));
//            element.add("Alumnos Ayudantes:");
//            document.add(element);
//
//            int count = 1;
//            for (EntidadEstudiante estudiante : activoAlumno.getEstudiantesPresentes()) {
//                element = new Paragraph();
//                element.setAlignment(Element.ALIGN_LEFT);
//                element.setFont(FontFactory.getFont(FontFactory.TIMES));
//                element.add(count++ + ". " + estudiante.getNombre() + " " + estudiante.getApellidos());
//                document.add(element);
//            }
//
//            element = new Paragraph();
//            element.setAlignment(Element.ALIGN_LEFT);
//            element.setFont(FontFactory.getFont(FontFactory.TIMES_BOLD));
//            element.add("Ausentes:");
//            document.add(element);
//
//            PdfPTable table = new PdfPTable(2);
//            table.setWidthPercentage(100);
//            PdfPCell cell;
//            cell = new PdfPCell(new Phrase("Nombres y apellidos", FontFactory.getFont(FontFactory.TIMES_BOLD)));
//            cell.setHorizontalAlignment(Element.ALIGN_CENTER);
//            table.addCell(cell);
//
//            cell = new PdfPCell(new Phrase("Facultad", FontFactory.getFont(FontFactory.TIMES_BOLD)));
//            cell.setHorizontalAlignment(Element.ALIGN_CENTER);
//            table.addCell(cell);
//
//            for (EntidadEstudiante estudiante : activoAlumno.getEstudiantesAusentes()) {
//                cell = new PdfPCell(new Phrase(estudiante.getNombre() + " " + estudiante.getApellidos(), FontFactory.getFont(FontFactory.TIMES)));
//                cell.setVerticalAlignment(Element.ALIGN_MIDDLE);
//                cell.setHorizontalAlignment(Element.ALIGN_LEFT);
//                table.addCell(cell);
//
//                cell = new PdfPCell(new Phrase(estudiante.getFacultad().getNombre(), FontFactory.getFont(FontFactory.TIMES)));
//                cell.setVerticalAlignment(Element.ALIGN_MIDDLE);
//                cell.setHorizontalAlignment(Element.ALIGN_LEFT);
//                table.addCell(cell);
//            }
//            document.add(table);
//
//            element = new Paragraph();
//            element.add(" ");
//            document.add(element);
//
//            element = new Paragraph();
//            element.setAlignment(Element.ALIGN_LEFT);
//            element.setFont(FontFactory.getFont(FontFactory.TIMES_BOLD));
//            element.add("Consideraciones generales:");
//            document.add(element);
//
//            element = new Paragraph();
//            element.setAlignment(Element.ALIGN_JUSTIFIED);
//            element.setFont(FontFactory.getFont(FontFactory.TIMES));
//            element.add(activoAlumno.getConsideracionesGenerales());
//            document.add(element);
//
//            element = new Paragraph();
//            element.setAlignment(Element.ALIGN_LEFT);
//            element.setFont(FontFactory.getFont(FontFactory.TIMES_BOLD));
//            element.add("Planteamientos realizados por los estudiantes AA:");
//            document.add(element);
//
//            element = new Paragraph();
//            element.setAlignment(Element.ALIGN_JUSTIFIED);
//            element.setFont(FontFactory.getFont(FontFactory.TIMES));
//            element.add(activoAlumno.getPlanteamientosRealizados());
//            document.add(element);
//
            document.close();
        } catch (DocumentException ex) {
            logger.error("Error occurred: {0}", ex);
        }

        return new ByteArrayInputStream(out.toByteArray());
    }

}
