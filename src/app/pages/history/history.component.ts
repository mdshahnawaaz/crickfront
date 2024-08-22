import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../../services/api-call.service';
import { MatchCardComponent } from '../../components/match-card/match-card.component';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [MatchCardComponent],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})
export class HistoryComponent implements OnInit {
     constructor(private _api:ApiCallService){}
      allMatch:any;
     ngOnInit(): void {
         this._api.getAllMatches().subscribe({
             next:data=>{
              this.allMatch=data;
             },
             error:error=>{
                console.log(error);
             }
         })
     }
}
