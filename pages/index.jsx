import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import { calculator } from "../res/calculator";

const pkg = require("../package.json");

export default function Home(props) {
    const [root_fs, setRootFS] = useState(16);

    const [from, setFrom] = useState("px");
    const [to, setTo] = useState("rem");

    const ref_base_field = useRef('');
    const ref_from_field = useRef(16);
    const ref_result_field = useRef(1);



    function calc(value, direction) {
        var result;

        if (value === "") value = 1;

        if (direction === "right") {
            result = ((value / root_fs));
            ref_result_field.current.value = parseFloat(result.toFixed(3));
        }

        if (direction === "left") {
            result = ((value * root_fs));
            ref_from_field.current.value = parseFloat(result.toFixed(3));
        }
    }



    return <>
        <Head>
            <title>Calc PX to REM</title>
        </Head>

        <header className="titlebar d-flex flex-row border-bottom navbar text-white rounded-pill rounded-top">
            <h2 className="navbar-brand m-0 mx-auto fw-bolder">{from} <i className="fal fa-exchange" /> {to}</h2>
        </header>

        <section className="d-flex flex-column flex-fill py-3">
            <form onSubmit={(event) => event.preventDefault()} className="container container-narrow d-flex flex-column flex-fill gap-2">
                <div className="form-group d-flex flex-row gap-2">
                    <div className="input-group">
                        <input ref={ref_from_field} type="tel" placeholder={from} className="form-control" min="0.001" defaultValue={root_fs} direction="rtl" onChange={(event) => calc(event.target.value, "right")} />
                        <span className="input-group-text bg-transparent">{from}</span>
                    </div>

                    <span className="input-group-text border-0 bg-transparent"><i className="fal fa-exchange" /></span>

                    <div className="input-group">
                        <input ref={ref_result_field} type="tel" placeholder={to} className="form-control" min="0.001" defaultValue={root_fs} direction="rtl" onChange={(event) => calc(event.target.value, "left")} />
                        <span className="input-group-text bg-transparent">{to}</span>
                    </div>
                </div>

                <label htmlFor="base-input" className="d-flex flex-row small border rounded p-1 align-items-end justify-content-end mx-auto">
                    <span className="rounded-start bg-transparent">Root font-size</span>
                    <input type="tel" id="base-input" className="border-0 text-end border" direction="rtl" style={{ width: "2rem" }} min="0" placeholder="base" defaultValue={root_fs} onChange={(event) => { setRootFS(event.target.value); calc(ref_result_field.current.value, "left") }} />
                    <span className="border-0 bg-transparent border">px</span>
                </label>
            </form>
        </section>

        <footer className="mt-auto">
            <div className="container-fluid">
                <div className="d-flex flex-row justify-content-between gap-2 py-1">
                    <small className="text-muted fw-bold">LinkHub</small>
                    <small className="text-muted"><i className="fal fa-mobile me-1" /> {pkg.version}</small>
                </div>
            </div>
        </footer>
    </>;
}