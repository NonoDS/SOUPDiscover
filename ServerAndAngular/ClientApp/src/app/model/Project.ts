import { RepositoryDto } from "./repository";
import { PackageDto, PackageType } from "./package";

export class ProjectDto {
  name: string;
  commandLinesBeforeParse: string;
  repositoryId: string;
  nugetServerUrl: string;
  packegeTypes: PackageType[];
}