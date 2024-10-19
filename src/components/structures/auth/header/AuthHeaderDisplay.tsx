import React, { Fragment, PropsWithChildren, ReactNode, useContext } from "react";

import { AuthHeaderContext } from "./AuthHeaderContext";

interface Props {
    title: ReactNode;
    icon?: ReactNode;
    serverPicker: ReactNode;
}

export function AuthHeaderDisplay({ title, icon, serverPicker, children }: PropsWithChildren<Props>): JSX.Element {
    const context = useContext(AuthHeaderContext);
    if (!context) {
        return <></>;
    }
    const current = context.state[0] ?? null;
    return (
        <Fragment>
            {current?.icon ?? icon}
            <h1 style={{ marginBottom: '20px' }}>{current?.title ?? title}</h1>
        </Fragment>
    );
}
