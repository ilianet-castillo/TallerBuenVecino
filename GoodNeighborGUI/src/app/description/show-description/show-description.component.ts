import {Component, OnInit} from '@angular/core';
import {Description} from '../description.model';
import {DescriptionService} from '../description.service';

@Component({
  selector: 'app-show-description',
  templateUrl: './show-description.component.html',
  styleUrls: ['./show-description.component.css']
})
export class ShowDescriptionComponent implements OnInit {

  description: Description;

  constructor(private descriptionService: DescriptionService) {
  }

  ngOnInit(): void {

    this.descriptionService.requestGet().toPromise().then(value => {
      this.description = value as Description;
    }).catch(reason => alert(reason));
  }

  edit(): void {
    this.descriptionService.edit(this.description);
  }

  cancel(): void {
    this.descriptionService.list();
  }

}
