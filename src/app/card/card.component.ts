import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() Type:String="";
  @Input() Price:String="";
  @Input() UserQuantity:String="";
  @Input() Storage:String="";
  @Input() PublicProjects:String="";
  @Input() CommunityAccess:String="";
  @Input() PrivateProjects:String="";
  @Input() PhoneSupport:String="";
  @Input() DomainQuant:String="";
  @Input() StatusReports:String="";
  @Input() PrivateProjectsIcon="";
  @Input() PhoneSupportIcon="";
  @Input() DomainQuantIcon="";
  @Input() StatusReportsIcon="";
  @Input() PrivateProjectsList="";
  @Input() PhoneSupportList="";
  @Input() DomainQuantList="";
  @Input() StatusReportsList=""
}