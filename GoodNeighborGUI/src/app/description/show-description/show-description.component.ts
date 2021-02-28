import {Component, OnInit} from '@angular/core';
import {DescriptionModel} from '../description.model';
import {DescriptionService} from '../description.service';

@Component({
  selector: 'app-show-description',
  templateUrl: './show-description.component.html',
  styleUrls: ['./show-description.component.css']
})
export class ShowDescriptionComponent implements OnInit {

  description: DescriptionModel;

  constructor(private descriptionService: DescriptionService) {
  }

  ngOnInit(): void {
    this.descriptionService.requestGet().toPromise().then(value => {
      this.description = value as DescriptionModel;
    }).catch(reason => alert(reason));
  }

  edit(): void {
    this.descriptionService.edit(this.description);
  }

  cancel(): void {
    this.descriptionService.list();
  }

}
