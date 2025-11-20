import React from 'react'
import { toast } from 'react-toastify'
let leodingId = null

export function ShowLoading(msg = "در حال اتصال به سرور...") {
 if(!leodingId) {
 leodingId = toast.loading(msg, {
      position: "bottom-left",
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
export function ShowError(msg = "خطا در اتصال به سرور!") {
 toast.error(msg, {
    position: "bottom-left",
    autoClose: 2000,
  })
}

