import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../../services/api-call.service';
import { CommonModule } from '@angular/common';
import { MatchCardComponent } from "../../components/match-card/match-card.component";

@Component({
  selector: 'app-live',
  standalone: true,
  imports: [CommonModule, MatchCardComponent],
  templateUrl: './live.component.html',
  styleUrl: './live.component.css'
})
export class LiveComponent implements OnInit{
    constructor(private _api:ApiCallService) {
      
    }
    liveMatches:any;
    ngOnInit(): void {
        this.loadMatches();
    }
    loadMatches(){
      this._api.getLiveMatches().subscribe({
        next:data=>{
          console.log(data);
          this.liveMatches=data;
        },
        error:error=>{
          console.log(error);
        }
      })
    }
}
