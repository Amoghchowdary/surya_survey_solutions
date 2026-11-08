# Surya Survey Solutions V17

## Supplied logo watermark
- Uses the client-supplied Surya Survey Solutions logo.
- The uploaded screenshot was cleaned into a transparent circular watermark asset; the logo design itself was not redesigned.
- The Surya logo is physically baked into every public Project and Gallery image file.
- Because the watermark is embedded in the image itself, opening a raw image URL still shows the Surya watermark.
- Project and Gallery videos show a non-clickable Surya watermark overlay during website playback.

## Public download controls
- Removed the project-image open-original link.
- Disabled the context menu on protected project and Gallery media.
- Disabled image/video drag actions on protected media.
- Videos use `controlsList="nodownload noremoteplayback"`.
- Picture-in-picture is disabled on protected public videos.
- Normal playback controls remain available.

## Important security boundary
A public website cannot make displayed media cryptographically impossible to capture. A determined visitor may still use developer tools, browser cache, screenshots, or screen recording. V17 removes normal download affordances, embeds the Surya watermark directly into images, and adds video watermarking/deterrents.

## Preserved
- V16 project naming and photo corrections.
- Complete project and celebration media libraries.
- Responsive desktop/tablet/mobile design.
- Existing project deep links.
- Existing deployment-folder workflow.
