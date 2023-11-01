export interface IUser {
	id: string;
	role: "student" | "teacher" | "admin";
	name: {
		firstName: string;
		middleName?: string;
		lastName: string;
	};
	gender: "male" | "female";
	email: string;
	password: string;
	contactNumber: string;
	emergencyContactNumber: string;
	address: string;
}
