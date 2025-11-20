import React from 'react'
import { toast } from 'react-toastify'
let leodingId = null

export function ShowLoading(msg = "Connecting to server...") {
 if(!leodingId) {
 leodingId = toast.loading(msg, {
      position: "top-left",
      closeOnClick: true,
    })
 }
}
export function HideLoading() {
    if(leodingId) {
        toast.dismiss(leodingId)
        leodingId = null
    }
 
}
export function ShowError(msg = "Error connecting to server!") {
 toast.error(msg, {
    position: "top-left",
    autoClose: 2000,
  })
}

