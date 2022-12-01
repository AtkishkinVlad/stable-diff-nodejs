import Replicate from 'replicate-js'
import dotenv from 'dotenv' 

dotenv.config()

const replicateToken = process.env.REPLICATE_TOKEN

const replicate = new Replicate({
    token: replicateToken
});

// If you set the REPLICATE_API_TOKEN environment variable, you do not need to provide a token to the constructor.
// const replicate = new Replicate();
export const generateImage = async (text) => {
    const stableDiffusion = await replicate.models.get('stability-ai/stable-diffusion');
    const predict = await stableDiffusion.predict({ prompt: text});
    return predict[0];
}
