#!/usr/bin/env node
import { ChatGPTAPI } from 'chatgpt'
import PromptSync from 'prompt-sync'
import { config } from 'dotenv'
config()

const api = new ChatGPTAPI({sessionToken: process.env.SESSION_TOKEN})

const prompt = PromptSync()

await api.ensureAuth()

while (true) {    
    let question = prompt("> ")

    let response = "\n" + await api.sendMessage(question) + "\n"

    console.log(response)
}