function filterAppointments(appointments, aspect, value) {
  return appointments.filter(appointment => {
    if (aspect === 'appointmentDate' || aspect === 'createdAt' || aspect === 'updatedAt') {
      if (value.includes('-')) {
        return new Date(appointment[aspect]).toLocaleDateString() === new Date(value).toLocaleDateString();
      } else {
        return new Date(appointment[aspect]).toLocaleDateString().includes(value);
      }
    } else if (aspect === 'appointmentTime') {
      return appointment[aspect] === value;
    } else if (aspect === 'appointmentStatus') {
      return appointment[aspect] === value;
    } else {
      return appointment[aspect].toString().toLowerCase().includes(value.toString().toLowerCase());
    }
  });
}