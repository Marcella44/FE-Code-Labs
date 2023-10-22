import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService,
              private route: ActivatedRoute,
              private router: Router) { } // Inject activated route

  ngOnInit() {
    const id = +this.route.snapshot.params['id']; // use id to get server   //use + to convert to number
    this.server = this.serversService.getServer(id);
    this.route.params.subscribe((params: Params) => { // react to changes using subscribe
      this.server = this.serversService.getServer(+params['id']); // update the server after any changes
    }
    );
  }

  onEdit() {
    this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'}) // relative path
  }
}
