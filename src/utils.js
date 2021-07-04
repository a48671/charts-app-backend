function getDataByDateRange(data, start, end) {
    return data.filter((item) => (item.t >= start && item.t <= end));
}

module.exports = {
    getDataByDateRange
}
