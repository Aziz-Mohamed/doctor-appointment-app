// "use client"
import React from 'react'
import {insertFakeAppointments} from "@/_lib/actions";
import { Button } from "@/_components/ui/Button";

function InsertFakeBookingButton() {
  return (
    <form action={insertFakeAppointments}>
      <Button>
      insert Fake Appoints
      </Button>
    </form>
  )
}

export default InsertFakeBookingButton
