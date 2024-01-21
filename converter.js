const fs = require('fs')
const Jimp = require('jimp')

async function getImageData(img, outputFilePath) {
	const image = await Jimp.read(img)
	const { width, height } = { width: 128, height: 64 }
	let imageData = []

	image.resize(width, height)

	image.scan(0, 0, image.bitmap.width, image.bitmap.height, function (x, y, idx) {
		const r = this.bitmap.data[idx]
		const g = this.bitmap.data[idx + 1]
		const b = this.bitmap.data[idx + 2]

		const grayscale = Math.round((r + g + b) / 3 / 255)

		imageData.push(grayscale)
	})

	imageData = groupStrings(imageData)
	imageData = imageData.map((e) => {
		let str = parseInt(e, 2).toString(16)
		if (str.length === 1) str = '0' + str
		return '0x' + str
	})

	const lines = []
	for (let i = 0; i < imageData.length; i += 16) {
		lines.push(imageData.slice(i, i + 16).join(', ') + ', ')
	}

	const outputText = lines.join('\n')

	fs.writeFileSync(outputFilePath, outputText)
}

function groupStrings(array) {
	const result = array
		.reduce((acc, curr, index) => {
			if (index % 8 === 0) {
				acc.push([])
			}
			acc[acc.length - 1].push(curr)
			return acc
		}, [])
		.map((group) => group.join(''))

	return result
}

getImageData('sc1.jpg', 'sc1_bitmap.txt')
getImageData('sc2.jpg', 'sc2_bitmap.txt')
