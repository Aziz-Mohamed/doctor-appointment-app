function filterAppointments(appointments, filters) {
  return appointments.filter(appointment => {
    for (const aspect in filters) {
      if (aspect === 'appointmentDate' || aspect === 'createdAt' || aspect === 'updatedAt') {
        if (filters[aspect].includes('-')) {
          if (new Date(appointment[aspect]).toLocaleDateString() !== new Date(filters[aspect]).toLocaleDateString()) {
            return false;
          }
        } else {
          if (!new Date(appointment[aspect]).toLocaleDateString().includes(filters[aspect])) {
            return false;
          }
        }
      } else if (aspect === 'appointmentTime') {
        if (appointment[aspect] !== filters[aspect]) {
          return false;
        }
      } else if (aspect === 'appointmentStatus') {
        if (appointment[aspect] !== filters[aspect]) {
          return false;
        }
      } else {
        if (!appointment[aspect].toString().toLowerCase().includes(filters[aspect].toString().toLowerCase())) {
          return false;
        }
      }
    }
    return true;
  });
}