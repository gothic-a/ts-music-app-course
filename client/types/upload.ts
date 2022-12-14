import { FormEvent } from "react"
import { FormikErrors } from "formik"
import { FormSteps } from "../pages/upload-track/config"
import { ErrorType } from "../utils/parseError"
import { Track } from "./track"

export type Status = 'error' | 'process' | 'finish' | 'wait'

export interface UploadTrackSliceState {
    data: Track | null,
    loading: boolean,
    error: ErrorType | null,
    success: boolean,
    progress: number | null
}

export interface ProgressStep {
    title: string,
    description: string,
    isUnlock: boolean,
    isFailed: boolean,
    isSuccess: boolean,
    formStep: FormSteps
} 

export interface FileWithAdditionalData {
    file: File & { path: string }, 
    additionalData: {
        mbsize: number,
        preview?: string,
        duration?: number
    }
}

export type HandleStepStatus = (formStep: FormSteps) => void
export type OnChangeUploadStep = (value: number) => void 

export interface UploadFormInitialValues {
    image: FileWithAdditionalData,
    track: FileWithAdditionalData,
    description: {
        artist: string | null,
        name: string | null,
    }
}

export interface UploadFormErrors {
    errors?: {
        image?: {
            additionalData?: {
                mbsize?: string | null,
                preview?: string | null
            }
        },
        track?: {
            additionalData?: {
                mbsize?: string,
                duration?: string,
            }
        },
        description?: {
            artist?: string,
            name?: string
        }
    }
}

export type SetFile<F, R> = (field: F, file: FileWithAdditionalData) => R

export type SetFieldValue<F, E> = (field: F, value: any, shouldValidate?: boolean) => Promise<E | {}>;

export type SetUploadFormFieldValue = SetFieldValue<FormSteps, FormikErrors<UploadFormErrors>>
export type HandleSubmit = (e?: FormEvent<HTMLFormElement>) => void
export type HandleSetFile = (setFieldValue: SetUploadFormFieldValue) => SetFile<FormSteps, Promise<UploadFormErrors | void>>
