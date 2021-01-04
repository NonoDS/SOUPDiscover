import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PackageDto, PackageWithProjectDto } from '../model/package';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PackagesService {

  packagesApiEndpoint: string = this.baseUrl + 'api/Packages/';

  constructor(private httpClient: HttpClient,
    @Inject('BASE_URL') private baseUrl: string) {
  }

  /**
   * Return all package of the project defined
   * @param projectName
   */
  public GetPackageFromProjectName(projectName: string, csproj: string = null): Observable<PackageDto[]> {
    if (projectName == null) {
      throw new Error('projectName must be not null!');
    }
    let request = this.packagesApiEndpoint + 'filter?projectName=' + projectName;
    if (csproj != null) {
      request += '&csproj=' + csproj;
    }
    return this.httpClient.get<PackageDto[]>(request);
  }

  /**
   * Return list of project that use this version of the package
   * @param packageId
   * Id of the package to search
   * @param packageVersion
   * version of the package to search
   */
  public GetParentPackage(packageId: string, packageVersion: string): Observable<PackageWithProjectDto> {
    let request = this.packagesApiEndpoint + 'filter?packageId=' + packageId;
    request = request + '&packageVersion=' + packageVersion;
    return this.httpClient.get<PackageWithProjectDto>(request);
  }

  /**
   * Return the url that permit to download csv file of the project
   * */
  GetCsvUrl(projectId: string): string {
    return this.packagesApiEndpoint + 'exporttocsv/' + projectId;
  }

  SearchPackage(packageId: string): Observable<PackageWithProjectDto[]> {
    let request = this.packagesApiEndpoint + "searchpackage/" + packageId;
    return this.httpClient.get<PackageWithProjectDto[]>(request);
  }
}
