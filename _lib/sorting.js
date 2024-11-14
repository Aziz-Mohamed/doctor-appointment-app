function sortAppointments(appointments, aspect, order) {
  if (order === 'asc') {
    return appointments.sort((a, b) => {
      if (aspect === 'appointmentDate' || aspect === 'createdAt' || aspect === 'updatedAt') {
        return new Date(a[aspect]) - new Date(b[aspect]);
      } else if (aspect === 'appointmentTime') {
        return a[aspect].localeCompare(b[aspect]);
      } else {
        if (a[aspect] < b[aspect]) return -1;
        if (a[aspect] > b[aspect]) return 1;
        return 0;
      }
    });
  } else if (order === 'desc') {
    return appointments.sort((a, b) => {
      if (aspect === 'appointmentDate' || aspect === 'createdAt' || aspect === 'updatedAt') {
        return new Date(b[aspect]) - new Date(a[aspect]);
      } else if (aspect === 'appointmentTime') {
        return b[aspect].localeCompare(a[aspect]);
      } else {
        if (a[aspect] < b[aspect]) return 1;
        if (a[aspect] > b[aspect]) return -1;
        return 0;
      }
    });
  } else {
    throw new Error('Invalid order. Please specify "asc" or "desc".');
  }
}









// function sortAppointments(appointments, aspect, order = "asc") {
//   if (order === "asc") {
//     return appointments.sort((a, b) => {
//       if (a[aspect] < b[aspect]) return -1;
//       if (a[aspect] > b[aspect]) return 1;
//       return 0;
//     });
//   } else if (order === "desc") {
//     return appointments.sort((a, b) => {
//       if (a[aspect] < b[aspect]) return 1;
//       if (a[aspect] > b[aspect]) return -1;
//       return 0;
//     });
//   } else {
//     throw new Error(`something went wrong. You have used ${order}. let's try later`);
//   }
// }
