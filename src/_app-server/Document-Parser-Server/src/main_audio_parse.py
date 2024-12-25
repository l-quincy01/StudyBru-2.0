import whisper
import warnings

warnings.filterwarnings(
    "ignore", message="You are using `torch.load` with `weights_only=False`"
)


model = whisper.load_model("base")

result = model.transcribe("./Files/ProverbsAudio.m4a", fp16=False)
print(result["text"])
