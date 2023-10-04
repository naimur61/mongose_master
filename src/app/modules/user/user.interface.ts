export interface IUser {
	role: string;
	password: string;
	email: string;
	name: {
		firstName: string;
		middleName?: string;
		lastName: string;
	};
	gender: "male" | "female";
	contactNumber: string;
	emergencyContactNumber?: string;
	permanentAddress: string;
	presentAddress?: string;
}
