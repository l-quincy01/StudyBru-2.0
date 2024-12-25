import moviepy.video.VideoClip


vid = moviepy.VideoFileClip("./Files/my_vid.mp4")

ext_audio = vid.audio

ext_audio.write_audiofile("example.mp3")
