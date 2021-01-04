
export enum PackageType {
  nuget,
  npm,
}

export class PackageDto {
  /**
   * Id of the package in database
   */
  id: number;

  /**
    * The name of the package
    */
  packageId: string;

  /**
    * Version of the package
    */
  version: string;

  /**
   * The package licence.
   * */
  licence: string;

  /**
   * Description of the package
   */
  description: string;

  /**
    * Nuget package or npm package
    */
  packageType: PackageType;

  /**
   * The project Url of this package.
   * Can be empty.
   */
  projectUrl: string;
}

export class PackageWithProjectDto {
  /**
   * The package 
   * */
  packageDto: PackageDto;

  /*
   * All project name where is found the package
   */
  projectNames: string[];
}
