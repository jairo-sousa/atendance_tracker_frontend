import { toaster } from "@/components/ui/toaster";

export const ToastService = {
    showToast(
        title: string,
        description: string,
        type: "loading" | "success" | "error" | "info"
    ) {
        toaster.create({
            title,
            description,
            type,
        });
    },

    dismissToast() {
        toaster.dismiss();
    },
};
