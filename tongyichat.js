import OpenAI from "openai";

const openai = new OpenAI(
    {
        // 若没有配置环境变量，请用百炼API Key将下行替换为：apiKey: "sk-xxx",
        apiKey: "sk-f01ff4aabe8443e39c8b2a52a523ed2d", // 如何获取API Key：https://help.aliyun.com/zh/model-studio/developer-reference/get-api-key
        baseURL: "https://dashscope.aliyuncs.com/compatible-mode/v1",
    }
);

async function main() {
    const completion = await openai.chat.completions.create({
        model: "qwen-plus",  // 模型列表：https://help.aliyun.com/zh/model-studio/getting-started/models
        messages: [
            { role: "system", content: "You are a helpful assistant." },
            { role: "user", content: "介绍区块链？" }
        ],
    });
    console.log(completion.choices[0].message.content)
}

main()