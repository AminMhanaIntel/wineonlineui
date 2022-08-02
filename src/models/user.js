export default class User {
    constructor(firstName, lastName, phone, address){
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.address = address;
    }
}

export const UserToView = {
    firstName: 'First Name',
    lastName: 'Last Name',
    phone: 'Phone Number',
    address: 'Address'
}