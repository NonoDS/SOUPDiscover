import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { RepositoryDto } from '../model/repository';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
/**
* Manage repositories on server
*/
export class RepositoriesService {

  repositoryEndpoint: string = this.baseUrl + 'api/repositories/';

  constructor(private httpClient: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  /**
   * Create a new repository
   * @param repository the new repository to create
   */
  AddRepository(repository: RepositoryDto): Observable<RepositoryDto> {
    const headerOptions = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.post<RepositoryDto>(this.repositoryEndpoint, JSON.stringify(repository), { headers: headerOptions }).
      pipe(
        map(data => RepositoryDto.CreateFromData(data))
      );;
  }

  /**
  *  Return all repositories on database
  */
  GetRepositories(): Observable<RepositoryDto[]> {
    return this.httpClient.get<RepositoryDto[]>(this.repositoryEndpoint).
      pipe(
        map(data => data.map(d => RepositoryDto.CreateFromData(d)))
      );
  }

  /**
   * Get a repository configuration
   * @param id
   */
  GetRepository(id: string): Observable<RepositoryDto> {
    return this.httpClient.get<RepositoryDto>(this.repositoryEndpoint + id).
      pipe(
        map(data => RepositoryDto.CreateFromData(data))
      );
  }

  /**
   * Update the repository
   * @param repository the repository to update
   */
  UpdateRepository(repository: RepositoryDto) {
    const headerOptions = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.put<RepositoryDto>(this.repositoryEndpoint + repository.name, JSON.stringify(repository),
      { headers: headerOptions }).
      pipe(
        map(data => RepositoryDto.CreateFromData(data))
      );
  }

  /**
   * Delete a repository
   * @param currentProjectId
   */
  DeleteRepository(repositoryId: string): Observable<RepositoryDto> {
    return this.httpClient.delete(this.repositoryEndpoint + repositoryId);
  }
}
