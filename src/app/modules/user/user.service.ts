import User from "./user.model";

export const createUserToDB = async () => {
	const user = await new User({
		id: "04",
		role: "student",
		name: {
			firstName: "Naimur",
			lastName: "Rahman",
		},
		gender: "male",
		email: "naimur4@gmail.com",
		password: "2345",
		contactNumber: "+2452352345",
		emergencyContactNumber: "+287452352345",
		address: "Handiyal",
	});
	await user.save();
	return user;
};
