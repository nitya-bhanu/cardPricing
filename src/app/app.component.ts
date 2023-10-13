import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cardBootstrap';
  cardElements=[{
    Type:"Free",
    Price:"$0",
    UserQuantity:"Single User",
    Storage:"5GB Storage",
    PublicProjects:"Unlimited Public Projects",
    CommunityAccess:"Community Access",
    PrivateProjects:"Unlimited Private Projects",
    PhoneSupport:"Dedicated Phone Support",
    DomainQuant:"Free Subdomain",
    StatusReports:"Monthly Status Reports",
    PrivateProjectsIcon:"fas fa-times",
    PrivateProjectsList:"text-muted",
    PhoneSupportIcon:"fas fa-times",
    PhoneSupportList:"text-muted",
    DomainQuantIcon:"fas fa-times",
    DomainQuantList:"text-muted",
    StatusReportsIcon:"fas fa-times",
    StatusReportsList:"text-muted"
  },
  {
    Type:"Plus",
    Price:"$9",
    UserQuantity:"5 Users",
    Storage:"50 GB Storage",
    PublicProjects:"Unlimited Public Storage",
    CommunityAccess:"Community Access",
    PrivateProjects:"Unlimited Private Projects",
    PhoneSupport:"Dedicated Phone Support",
    DomainQuant:"Free Subdomain",
    StatusReports:"Monthly Status Reports",
    PrivateProjectsIcon:"fas fa-check",
    PrivateProjectsList:"",
    PhoneSupportIcon:"fas fa-check",
    PhoneSupportList:"",
    DomainQuantIcon:"fas fa-check",
    DomainQuantList:"",
    StatusReportsIcon:"fas fa-times",
    StatusReportsList:"text-muted"
  },
  {
    Type:"Pro",
    Price:"$49",
    UserQuantity:"Unlimited Users",
    Storage:"150GB Storage",
    PublicProjects:"Unlimited Public Projects",
    CommunityAccess:"Community Access",
    PrivateProjects:"Unlimited Private Projects",
    PhoneSupport:"Dedicated Phone Support",
    DomainQuant:"Unlimited Free Subdomains",
    StatusReports:"Monthly Status Reports",
    PrivateProjectsIcon:"fas fa-check",
    PrivateProjectsList:"",
    PhoneSupportIcon:"fas fa-check",
    PhoneSupportList:"",
    DomainQuantIcon:"fas fa-check",
    DomainQuantList:"",
    StatusReportsIcon:"fas fa-check",
    StatusReportsList:""
  }]
}
