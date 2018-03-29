const stClass = (cls) => `content__status content__status--${cls}`;
export const getStatusIconProps = (status) => {
    if (!status)
        return;
    switch (status.toLowerCase()) {
        case "success":
            return {
                i: "Tick",
                class: stClass("success")
            };
        case "warning":
            return {
                i: "Warning",
                class: stClass("warning")
            };
    }
};
