import * as React from "react"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@workspace/ui/components/alert-dialog"

interface ModalProps {
    open: boolean
    onOpenChange: (open: boolean) => void
    title: string
    description: string | React.ReactNode
    onConfirm: () => void
    onCancel?: () => void
    confirmLabel?: string
    cancelLabel?: string
    confirmVariant?: "default" | "destructive"
    size?: "default" | "sm"
}

export function Modal({
    open,
    onOpenChange,
    title,
    description,
    onConfirm,
    onCancel,
    confirmLabel = "Confirm",
    cancelLabel = "Cancel",
    confirmVariant = "default",
    size = "default",
}: ModalProps) {
    const handleCancel = () => {
        onCancel?.()
        onOpenChange(false)
    }

    const handleConfirm = () => {
        onConfirm()
        onOpenChange(false)
    }

    return (
        <AlertDialog open={open} onOpenChange={onOpenChange}>
            <AlertDialogContent size={size}>
                <AlertDialogHeader>
                    <AlertDialogTitle>{title}</AlertDialogTitle>
                    <AlertDialogDescription>{description}</AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel onClick={handleCancel}>
                        {cancelLabel}
                    </AlertDialogCancel>
                    <AlertDialogAction onClick={handleConfirm} variant={confirmVariant}>
                        {confirmLabel}
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
