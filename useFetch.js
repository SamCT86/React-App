import { useState, useEffect, useRef } from "react"

export const useFetch = (url, method = "GET") => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(null)
    // this is the state that will hold the options for the fetch request, it will be null until the postData function is called
    const [options, setOptions] = useState(null)
    // define controller variable using useRef
    const controller = useRef(null)

    // this is the function that will be called to post data to the server, postData will be the data that we want to send to the server
    const postData = (postData) => {
        setOptions({
            method: "POST",
            // this is the header that tells the server that we are sending json data
            headers: { "Content-Type": "application/json" },
            // convert the data to json string before sending it
            body: JSON.stringify(postData)
        })
    }

    useEffect(() => {
        const controller = new AbortController()

        const fetchData = async (fetchOptions) => {
            setIsPending(true)

            try {
                const response = await fetch(url, { ...fetchOptions, signal: controller.signal })
                if (!response.ok) {
                    throw new Error(response.statusText)
                }
                const json = await response.json()

                setIsPending(false)
                setData(json)
                setError(null)
            } catch (error) {
                if (error.name === "AbortError") {
                    console.log('Fetch was aborted')
                } else {
                    setIsPending(false)
                    setError('Failed Fetch')
                    console.log(error.message)
                }
            }
        }

        if (method === "GET") {
            fetchData()
        }

        if (method === "POST" && options) {
            fetchData(options)
        }

        return () => {
            controller.abort()
        }

    }, [url, method, options])

    return { data, isPending, error, postData }
} 