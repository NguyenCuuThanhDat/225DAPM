const historyCategoryNames = {
    'thuong-tru': 'Thường trú',
    'tam-tru': 'Tạm trú',
    'tam-vang': 'Tạm vắng',
};

const historyRecords = [
    {
        id: 'HS001234',
        type: 'thuong-tru',
        citizen: 'Trần Thị Bình',
        cccd: '001234567890',
        received: '20/03/2026',
        processed: '22/03/2026',
        officer: 'Nguyễn Văn An',
        status: 'Đã duyệt',
        note: 'Hồ sơ đầy đủ, hợp lệ.',
        files: ['giay-to-1.pdf', 'giay-to-2.jpg'],
        timeline: [
            { title: 'Tiếp nhận hồ sơ', subtitle: 'Cán bộ: Nguyễn Văn An', status: 'Chờ duyệt', time: '20/03/2026 09:15' },
            { title: 'Yêu cầu bổ sung hồ sơ', subtitle: 'Cán bộ: Trần Thị Mai', status: 'Yêu cầu bổ sung', time: '21/03/2026 10:30', note: 'Vui lòng bổ sung giấy xác nhận cư trú và hợp đồng thuê nhà.' },
            { title: 'Duyệt hồ sơ', subtitle: 'Cán bộ: Nguyễn Văn An', status: 'Đã duyệt', time: '22/03/2026 14:20', note: 'Hồ sơ đầy đủ, hợp lệ.' }
        ]
    },
    {
        id: 'HS001235',
        type: 'tam-tru',
        citizen: 'Lê Văn Cường',
        cccd: '001234567891',
        received: '21/03/2026',
        processed: '23/03/2026',
        officer: 'Nguyễn Văn An',
        status: 'Đã duyệt',
        note: 'Xác nhận tạm trú OK.',
        files: ['hop-dong-tam-tru.pdf'],
        timeline: [
            { title: 'Tiếp nhận hồ sơ', subtitle: 'Cán bộ: Nguyễn Văn An', status: 'Chờ duyệt', time: '21/03/2026 08:50' },
            { title: 'Duyệt hồ sơ', subtitle: 'Cán bộ: Nguyễn Văn An', status: 'Đã duyệt', time: '23/03/2026 09:40', note: 'Hồ sơ đủ điều kiện tạm trú.' }
        ]
    },
    {
        id: 'HS001236',
        type: 'thuong-tru',
        citizen: 'Phạm Thị Dung',
        cccd: '001234567892',
        received: '19/03/2026',
        processed: '21/03/2026',
        officer: 'Trần Thị Mai',
        status: 'Yêu cầu bổ sung',
        note: 'Cần bổ sung giấy tờ.',
        files: ['cccd.jpg'],
        timeline: [
            { title: 'Tiếp nhận hồ sơ', subtitle: 'Cán bộ: Trần Thị Mai', status: 'Chờ duyệt', time: '19/03/2026 10:05' },
            { title: 'Yêu cầu bổ sung hồ sơ', subtitle: 'Cán bộ: Trần Thị Mai', status: 'Yêu cầu bổ sung', time: '21/03/2026 11:15', note: 'Yêu cầu bổ sung giấy xác nhận địa chỉ.' }
        ]
    },
    {
        id: 'HS001237',
        type: 'tam-vang',
        citizen: 'Hoàng Văn Em',
        cccd: '001234567893',
        received: '18/03/2026',
        processed: '20/03/2026',
        officer: 'Nguyễn Văn An',
        status: 'Đã duyệt',
        note: 'Tạm vắng hợp lệ.',
        files: [],
        timeline: [
            { title: 'Tiếp nhận hồ sơ', subtitle: 'Cán bộ: Nguyễn Văn An', status: 'Chờ duyệt', time: '18/03/2026 09:20' },
            { title: 'Duyệt hồ sơ', subtitle: 'Cán bộ: Nguyễn Văn An', status: 'Đã duyệt', time: '20/03/2026 13:50', note: 'Cho phép tạm vắng 2 tháng.' }
        ]
    },
    {
        id: 'HS001238',
        type: 'tam-tru',
        citizen: 'Ngô Thị Phượng',
        cccd: '001234567894',
        received: '17/03/2026',
        processed: '19/03/2026',
        officer: 'Trần Thị Mai',
        status: 'Từ chối',
        note: 'Hồ sơ chưa đủ.',
        files: ['don-tam-tru.pdf'],
        timeline: [
            { title: 'Tiếp nhận hồ sơ', subtitle: 'Cán bộ: Trần Thị Mai', status: 'Chờ duyệt', time: '17/03/2026 11:00' },
            { title: 'Từ chối hồ sơ', subtitle: 'Cán bộ: Trần Thị Mai', status: 'Từ chối', time: '19/03/2026 10:20', note: 'Thiếu xác nhận chủ hộ.' }
        ]
    }
];
