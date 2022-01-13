import { ServersService } from './../servers.service';
import { Observable } from 'rxjs/Observable';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Injectable } from '@angular/core';

interface Server{
    id: number;
    name: String;
    status: String;
}

@Injectable()
export class ServerResolver implements Resolve<Server>{

    constructor(private serversService: ServersService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Server> | Promise<Server> |Server{
        return this.serversService.getServer(+route.params['id']);
    }
}