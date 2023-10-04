import { User } from "./user.model";

export const createUserToDB = async () => {
	const user = await new User({
		role: "admin8",
		password: "<PASSWORD>",
		email: "admin@exampl8.com",
		name: {
			firstName: "John",
			middleName: "",
			lastName: "Doe",
		},
		gender: "male",
		contactNumber: "0700000000",
		emergencyContactNumber: "0700000000",
		permanentAddress: "123 Main Street",
		presentAddress: "123 Main Street",
	});

	await user.save();
	return user;
};
