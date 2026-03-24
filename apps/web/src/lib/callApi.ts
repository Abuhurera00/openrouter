import { toast } from "sonner";

interface CallApiOptions {
  successMessage?: string;
  errorMessage?: string;
  showSuccess?: boolean;
  showError?: boolean;
}

export const callApi = async <T>(apiCall: () => Promise<T>, options: CallApiOptions = {}): Promise<T | null> => {
  const {
    successMessage = "Success",
    errorMessage = "Something went wrong",
    showSuccess = true,
    showError = true,
  } = options;

  try {
    const result = await apiCall();
    if (showSuccess) toast.success(successMessage);
    return result;
  } catch (err: any) {
    const message = err?.response?.data?.message || errorMessage;
    if (showError) toast.error(message);
    return null;
  }
};
