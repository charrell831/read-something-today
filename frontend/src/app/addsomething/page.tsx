"use client";

import { FormEvent } from "react";


export default function AddSomething() {
    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget)
        const response = await fetch('/api/submit', {
            method: 'POST',
            body: formData,
        })

        const data = await response.json();
        console.log(data)
    }
    return (
        <div>
            <h1 className="pt-6 mb-4 flex justify-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                Add a Reading!
            </h1>
            <form onSubmit={onSubmit}>
                Title:   <input type="text" name="title"/>
                <br />
                <br />
                Link to Reading: <input type="text" name="author"/>
                <br />
                <br />
                Author: <input type="text" name="articleLink"/>
                <br />
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}