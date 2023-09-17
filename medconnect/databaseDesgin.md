## Database Structure

MedHub uses MongoDB as its database to store user, doctor, and appointment information. Here's an overview of the database structure:

### User Schema

- **name** (String, required): The user's name.
- **email** (String, required): The user's email address.
- **password** (String, required): The user's password (hashed for security).
- **isDoctor** (Boolean, default: false): Indicates whether the user is a doctor.
- **isAdmin** (Boolean, default: false): Indicates whether the user has admin privileges.
- **seenNotifications** (Array, default: []): Stores notifications that the user has seen.
- **unseenNotifications** (Array, default: []): Stores notifications that the user has not seen yet.

### Doctor Schema

- **userId** (String, required): Unique identifier for the doctor, referencing a user ID.
- **firstName** (String, required): The doctor's first name.
- **lastName** (String, required): The doctor's last name.
- **phoneNumber** (String, required): Contact phone number for the doctor.
- **website** (String, required): The doctor's website or online profile.
- **address** (String, required): The doctor's office or practice address.
- **specialization** (String, required): The medical specialization or field of the doctor.
- **experience** (String, required): The doctor's years of experience or qualifications.
- **feePerConsultation** (Number, required): The fee charged by the doctor for each consultation.
- **timings** (Array, required): An array containing the doctor's available consultation timings.
- **status** (String, default: "pending"): The status of the doctor.

### Appointment Schema

- **userId** (String, required): Unique identifier for the user making the appointment.
- **doctorId** (String, required): Unique identifier for the doctor being consulted.
- **doctorInfo** (Object, required): Information about the doctor (referencing a Doctor document).
- **userInfo** (Object, required): Information about the user (referencing a User document).
- **date** (String, required): The date of the appointment.
- **time** (String, required): The time of the appointment.
- **status** (String, default: "pending"): The status of the appointment.

These schemas define the structure of your MongoDB documents for users, doctors, and appointments. They provide a clear and organized way to store and query data related to healthcare management within MedHub.
