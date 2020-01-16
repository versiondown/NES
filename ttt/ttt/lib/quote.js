// Data
var quotes = [
    "Vincent Van Gogh: I am seeking, I am striving, I am in it with all my heart.",
    "Victor Hugo: An intelligent hell would be better than a stupid paradise.",
    "Zig Ziglar: You must manage yourself before you can lead someone else.",
    "Louise Hay: I choose to make the rest of my life the best of my life.",
]

exports.getQuote = function () {
    var index = Math.floor(Math.random() * quotes.length)
    return quotes[index]
}