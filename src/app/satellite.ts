export class Satellite {
    name: string;
    orbitType: string;
    type: string;
    operational: boolean;
    launchDate: string;

    constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean) {
        this.name = name;
        this.orbitType = orbitType;
        this.type = type;
        this.operational = operational;
        this.launchDate = launchDate;
    }
    //TODO: shouldShowWarning method - returns boolean, no parameters, true if space debris, false otherwise, case insensitive
    //TODO: use shouldShowWarning to add warning CSS class to the <td> for satellites type
}
