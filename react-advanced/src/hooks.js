import { useState, useEffect } from "react"

export const useBoolean = (initialState = false) => {
    const [value, setValue] = useState(initialState)
    const toggle = () => setValue(value => !value)
    return [
        value,
        {
            toggle
        }
    ]
}

export const useNumber = (initialValue = 0) => {
    const [value, setValue] = useState(initialValue)
    const increase = () => setValue(value => value + 1)
    const decrease = () => setValue(value => value - 1)

    return [
        value,
        {
            increase,
            decrease
        }
    ]
}

export const useTimer = () => {
    const [count, { increase }] = useNumber(0)

    useEffect(() => {
        const interval = setInterval(() => increase(), 1000)
        return () => {
            clearInterval(interval)
        }
    }, [])

    return count
}

export const useInput = (defaultValue, options = {}) => {
    const [value, setValue] = useState(defaultValue)
    const onChange = (event) => setValue(event.target.value)

    const { persist } = options
    useEffect(() => {
        persist && setValue(window.localStorage.getItem(persist))
    }, [persist])

    useEffect(() => {
        persist && window.localStorage.setItem(persist, value)
    }, [persist, value])

    return {
        bindToProps: {
            value,
            onChange,
        },
        value
    }
}

export const useDocumentTitle = (title) => {
    useEffect(() => {
        window.document.title = title
    }, [title])
}

export const useMeasureWindow = () => {
    const [{ width, height }, setSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    })

    const onWindowSizeChange = () => {
        setSize({
            width: window.innerWidth,
            height: window.innerHeight
        })
    }
    useEffect(() => {
        window.addEventListener("resize", onWindowSizeChange)
        return () => window.removeEventListener("resize", onWindowSizeChange)
    }, [])

    return { width, height }
}