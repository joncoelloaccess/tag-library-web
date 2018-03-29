import '../../stencil.core';
import { EventEmitter } from "../../stencil.core";
export declare class TagProfile {
    /** Name of user profiled */
    name: string;
    /** Src of profile image */
    src: string;
    gender: string;
    dob: string;
    nationality: string;
    editProfileImage: EventEmitter;
    onEditProfileImage(): void;
    render(): JSX.Element;
}
