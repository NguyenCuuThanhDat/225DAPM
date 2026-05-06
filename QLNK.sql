IF EXISTS (SELECT name FROM sys.databases WHERE name = N'QUAN_LY_NHAN_KHAU')
BEGIN
    ALTER DATABASE QUAN_LY_NHAN_KHAU SET SINGLE_USER WITH ROLLBACK IMMEDIATE;
    DROP DATABASE QUAN_LY_NHAN_KHAU;
END
GO

-- Tạo database mới
CREATE DATABASE QUAN_LY_NHAN_KHAU;
GO

-- Sử dụng database
USE QUAN_LY_NHAN_KHAU;
GO
-- =============================================
-- DATABASE SCHEMA - QUAN LY NHAN KHAU, HO GIA DINH
-- SQL Server
-- =============================================

-- =========================
-- 1. BANG VAI_TRO
-- =========================
CREATE TABLE VAI_TRO (
    ma_vai_tro      BIGINT IDENTITY(1,1) PRIMARY KEY,
    ten_vai_tro     NVARCHAR(100) NOT NULL,
    mo_ta           NVARCHAR(255) NULL,

    CONSTRAINT UQ_VAI_TRO_ten_vai_tro UNIQUE (ten_vai_tro)
);
GO

-- =========================
-- 2. BANG NHAN_KHAU
-- =========================
CREATE TABLE NHAN_KHAU (
    ma_nhan_khau            BIGINT IDENTITY(1,1) PRIMARY KEY,
    cccd                    VARCHAR(20) NULL,
    ho_ten                  NVARCHAR(150) NOT NULL,
    ngay_sinh               DATE NULL,
    gioi_tinh               NVARCHAR(20) NULL,
    noi_sinh                NVARCHAR(255) NULL,
    so_dien_thoai           VARCHAR(15) NULL,
    trang_thai_nhan_khau    NVARCHAR(50) NULL,
    ngay_tao                DATETIME2 NOT NULL DEFAULT SYSDATETIME(),

    CONSTRAINT UQ_NHAN_KHAU_cccd UNIQUE (cccd)
);
GO

-- =========================
-- 3. BANG HO_GIA_DINH
-- =========================
CREATE TABLE HO_GIA_DINH (
    ma_ho_gia_dinh      VARCHAR(50) PRIMARY KEY,
    dia_chi             NVARCHAR(255) NULL,
    khu_vuc             NVARCHAR(100) NULL,
    to_dan_pho          NVARCHAR(100) NULL,
    trang_thai          NVARCHAR(50) NULL,
    ngay_tao            DATETIME2 NOT NULL DEFAULT SYSDATETIME()

);
GO

-- =========================
-- 4. BANG TAI_KHOAN
-- =========================
CREATE TABLE TAI_KHOAN (
    ma_tai_khoan        BIGINT IDENTITY(1,1) PRIMARY KEY,
    ten_dang_nhap       VARCHAR(100) NOT NULL,
    email               VARCHAR(150) NOT NULL,
    mat_khau            VARCHAR(255) NOT NULL,
    ma_vai_tro          BIGINT NOT NULL,
    ma_nhan_khau        BIGINT NULL,
    trang_thai          NVARCHAR(50) NULL,
    ngay_tao            DATETIME2 NOT NULL DEFAULT SYSDATETIME(),

    CONSTRAINT UQ_TAI_KHOAN_ten_dang_nhap UNIQUE (ten_dang_nhap),
    CONSTRAINT UQ_TAI_KHOAN_email UNIQUE (email),

    CONSTRAINT FK_TAI_KHOAN_ma_vai_tro
        FOREIGN KEY (ma_vai_tro) REFERENCES VAI_TRO(ma_vai_tro),

    CONSTRAINT FK_TAI_KHOAN_ma_nhan_khau
        FOREIGN KEY (ma_nhan_khau) REFERENCES NHAN_KHAU(ma_nhan_khau)
);
GO

-- =========================
-- 5. BANG BAO_CAO
-- =========================
CREATE TABLE BAO_CAO (
    ma_bao_cao          BIGINT IDENTITY(1,1) PRIMARY KEY,
    ma_tai_khoan        BIGINT NOT NULL,
    loai_bao_cao        NVARCHAR(100) NULL,
    tu_ngay             DATE NULL,
    den_ngay            DATE NULL,
    pham_vi             NVARCHAR(100) NULL,
    file_xuat           NVARCHAR(255) NULL,
    ngay_tao            DATETIME2 NOT NULL DEFAULT SYSDATETIME(),

    CONSTRAINT FK_BAO_CAO_ma_tai_khoan
        FOREIGN KEY (ma_tai_khoan) REFERENCES TAI_KHOAN(ma_tai_khoan)
);
GO

-- =========================
-- 6. BANG THANH_VIEN_HO
-- =========================
CREATE TABLE THANH_VIEN_HO (
    ma_ho_gia_dinh      VARCHAR(50) NOT NULL,
    ma_nhan_khau        BIGINT NOT NULL,
    quan_he_voi_chu_ho  NVARCHAR(100) NULL,
    la_chu_ho           BIT NOT NULL DEFAULT 0,
    trang_thai          NVARCHAR(50) NULL,

    CONSTRAINT PK_THANH_VIEN_HO
        PRIMARY KEY (ma_ho_gia_dinh, ma_nhan_khau),

    CONSTRAINT FK_THANH_VIEN_HO_ma_ho_gia_dinh
        FOREIGN KEY (ma_ho_gia_dinh) REFERENCES HO_GIA_DINH(ma_ho_gia_dinh),

    CONSTRAINT FK_THANH_VIEN_HO_ma_nhan_khau
        FOREIGN KEY (ma_nhan_khau) REFERENCES NHAN_KHAU(ma_nhan_khau)
);
GO

-- =========================
-- 7. BANG HO_SO
-- =========================
CREATE TABLE HO_SO (
    ma_ho_so            VARCHAR(50) PRIMARY KEY,
    loai_ho_so          NVARCHAR(100) NOT NULL,
    ma_nguoi_nop        BIGINT NOT NULL,
    ma_nguoi_xu_ly      BIGINT NULL,
    ma_ho_gia_dinh      VARCHAR(50) NOT NULL,
    ma_nhan_khau        BIGINT NOT NULL,
    trang_thai          NVARCHAR(50) NULL,
    ghi_chu             NVARCHAR(MAX) NULL,
    ngay_nop            DATETIME2 NOT NULL DEFAULT SYSDATETIME(),
    ngay_xu_ly          DATETIME2 NULL,

    CONSTRAINT FK_HO_SO_ma_nguoi_nop
        FOREIGN KEY (ma_nguoi_nop) REFERENCES NHAN_KHAU(ma_nhan_khau),

    CONSTRAINT FK_HO_SO_ma_nguoi_xu_ly
        FOREIGN KEY (ma_nguoi_xu_ly) REFERENCES TAI_KHOAN(ma_tai_khoan),

    -- Quan he HO_SO -> THANH_VIEN_HO
    CONSTRAINT FK_HO_SO_THANH_VIEN_HO
        FOREIGN KEY (ma_ho_gia_dinh, ma_nhan_khau)
        REFERENCES THANH_VIEN_HO(ma_ho_gia_dinh, ma_nhan_khau)
);
GO

-- =========================
-- 8. BANG TEP_DINH_KEM
-- =========================
CREATE TABLE TEP_DINH_KEM (
    ma_tep              BIGINT IDENTITY(1,1) PRIMARY KEY,
    ma_ho_so            VARCHAR(50) NOT NULL,
    ten_file            NVARCHAR(255) NOT NULL,
    duong_dan_file      NVARCHAR(500) NOT NULL,
    loai_giay_to        NVARCHAR(100) NULL,
    ngay_tai_len        DATETIME2 NOT NULL DEFAULT SYSDATETIME(),

    CONSTRAINT FK_TEP_DINH_KEM_ma_ho_so
        FOREIGN KEY (ma_ho_so) REFERENCES HO_SO(ma_ho_so)
);
GO

-- =========================
-- 9. BANG LICH_SU_XU_LY
-- =========================
CREATE TABLE LICH_SU_XU_LY (
    ma_lich_su          BIGINT IDENTITY(1,1) PRIMARY KEY,
    ma_ho_so            VARCHAR(50) NOT NULL,
    ma_tai_khoan        BIGINT NOT NULL,
    hanh_dong           NVARCHAR(100) NOT NULL,
    trang_thai_cu       NVARCHAR(50) NULL,
    trang_thai_moi      NVARCHAR(50) NULL,
    ghi_chu             NVARCHAR(MAX) NULL,
    thoi_gian_xu_ly     DATETIME2 NOT NULL DEFAULT SYSDATETIME(),

    CONSTRAINT FK_LICH_SU_XU_LY_ma_ho_so
        FOREIGN KEY (ma_ho_so) REFERENCES HO_SO(ma_ho_so),

    CONSTRAINT FK_LICH_SU_XU_LY_ma_tai_khoan
        FOREIGN KEY (ma_tai_khoan) REFERENCES TAI_KHOAN(ma_tai_khoan)
);
GO

-- =========================
-- 10. BANG THONG_BAO
-- =========================
CREATE TABLE THONG_BAO (
    ma_thong_bao        BIGINT IDENTITY(1,1) PRIMARY KEY,
    ma_tai_khoan        BIGINT NOT NULL,
    ma_ho_so            VARCHAR(50) NOT NULL,
    tieu_de             NVARCHAR(255) NOT NULL,
    noi_dung            NVARCHAR(MAX) NULL,
    da_doc              BIT NOT NULL DEFAULT 0,
    ngay_tao            DATETIME2 NOT NULL DEFAULT SYSDATETIME(),

    CONSTRAINT FK_THONG_BAO_ma_tai_khoan
        FOREIGN KEY (ma_tai_khoan) REFERENCES TAI_KHOAN(ma_tai_khoan),

    CONSTRAINT FK_THONG_BAO_ma_ho_so
        FOREIGN KEY (ma_ho_so) REFERENCES HO_SO(ma_ho_so)
);
GO

-- =========================
-- 11. BANG HS_THUONG_TRU
-- =========================
CREATE TABLE HS_THUONG_TRU (
    ma_ho_so                VARCHAR(50) PRIMARY KEY,
    dia_chi_dang_ky         NVARCHAR(255) NULL,
    thong_tin_ho_gia_dinh   NVARCHAR(MAX) NULL,

    CONSTRAINT FK_HS_THUONG_TRU_ma_ho_so
        FOREIGN KEY (ma_ho_so) REFERENCES HO_SO(ma_ho_so)
);
GO

-- =========================
-- 12. BANG HS_TAM_TRU
-- =========================
CREATE TABLE HS_TAM_TRU (
    ma_ho_so            VARCHAR(50) PRIMARY KEY,
    dia_chi_tam_tru     NVARCHAR(255) NULL,
    tu_ngay             DATE NULL,
    den_ngay            DATE NULL,
    ly_do               NVARCHAR(MAX) NULL,

    CONSTRAINT FK_HS_TAM_TRU_ma_ho_so
        FOREIGN KEY (ma_ho_so) REFERENCES HO_SO(ma_ho_so)
);
GO

-- =========================
-- 13. BANG HS_TAM_VANG
-- =========================
CREATE TABLE HS_TAM_VANG (
    ma_ho_so            VARCHAR(50) PRIMARY KEY,
    tu_ngay             DATE NULL,
    den_ngay            DATE NULL,
    noi_den             NVARCHAR(255) NULL,
    ly_do               NVARCHAR(MAX) NULL,

    CONSTRAINT FK_HS_TAM_VANG_ma_ho_so
        FOREIGN KEY (ma_ho_so) REFERENCES HO_SO(ma_ho_so)
);
GO

-- =========================
-- 14. BANG HS_KHAI_SINH
-- =========================
CREATE TABLE HS_KHAI_SINH (
    ma_ho_so            VARCHAR(50) PRIMARY KEY,
    ho_ten_tre          NVARCHAR(150) NULL,
    ngay_sinh           DATE NULL,
    gioi_tinh           NVARCHAR(20) NULL,
    noi_sinh            NVARCHAR(255) NULL,
    ma_cha              BIGINT NULL,
    ma_me               BIGINT NULL,

    CONSTRAINT FK_HS_KHAI_SINH_ma_ho_so
        FOREIGN KEY (ma_ho_so) REFERENCES HO_SO(ma_ho_so),

    CONSTRAINT FK_HS_KHAI_SINH_ma_cha
        FOREIGN KEY (ma_cha) REFERENCES NHAN_KHAU(ma_nhan_khau),

    CONSTRAINT FK_HS_KHAI_SINH_ma_me
        FOREIGN KEY (ma_me) REFERENCES NHAN_KHAU(ma_nhan_khau)
);
GO

-- =========================
-- 15. BANG HS_KHAI_TU
-- =========================
CREATE TABLE HS_KHAI_TU (
    ma_ho_so                VARCHAR(50) PRIMARY KEY,
    ma_nguoi_mat            BIGINT NULL,
    ngay_mat                DATE NULL,
    dia_diem_mat            NVARCHAR(255) NULL,
    nguyen_nhan             NVARCHAR(MAX) NULL,
    ma_nguoi_khai_bao       BIGINT NULL,

    CONSTRAINT FK_HS_KHAI_TU_ma_ho_so
        FOREIGN KEY (ma_ho_so) REFERENCES HO_SO(ma_ho_so),

    CONSTRAINT FK_HS_KHAI_TU_ma_nguoi_mat
        FOREIGN KEY (ma_nguoi_mat) REFERENCES NHAN_KHAU(ma_nhan_khau),

    CONSTRAINT FK_HS_KHAI_TU_ma_nguoi_khai_bao
        FOREIGN KEY (ma_nguoi_khai_bao) REFERENCES NHAN_KHAU(ma_nhan_khau)
);
GO

-- =========================
-- 16. BANG HS_TACH_HO
-- =========================
CREATE TABLE HS_TACH_HO (
    ma_ho_so            VARCHAR(50) PRIMARY KEY,
    ma_ho_cu            VARCHAR(50) NULL,
    dia_chi_ho_moi      NVARCHAR(255) NULL,
    ly_do               NVARCHAR(MAX) NULL,

    CONSTRAINT FK_HS_TACH_HO_ma_ho_so
        FOREIGN KEY (ma_ho_so) REFERENCES HO_SO(ma_ho_so),

    CONSTRAINT FK_HS_TACH_HO_ma_ho_cu
        FOREIGN KEY (ma_ho_cu) REFERENCES HO_GIA_DINH(ma_ho_gia_dinh)
);
GO

-- =========================
-- 17. BANG HS_NHAP_HO
-- =========================
CREATE TABLE HS_NHAP_HO (
    ma_ho_so                VARCHAR(50) PRIMARY KEY,
    ma_ho_dich              VARCHAR(50) NULL,
    ma_nhan_khau_nhap       BIGINT NULL,
    quan_he_voi_chu_ho      NVARCHAR(100) NULL,
    ly_do                   NVARCHAR(MAX) NULL,

    CONSTRAINT FK_HS_NHAP_HO_ma_ho_so
        FOREIGN KEY (ma_ho_so) REFERENCES HO_SO(ma_ho_so),

    CONSTRAINT FK_HS_NHAP_HO_ma_ho_dich
        FOREIGN KEY (ma_ho_dich) REFERENCES HO_GIA_DINH(ma_ho_gia_dinh),

    CONSTRAINT FK_HS_NHAP_HO_ma_nhan_khau_nhap
        FOREIGN KEY (ma_nhan_khau_nhap) REFERENCES NHAN_KHAU(ma_nhan_khau)
);
GO

-- =========================
-- 18. BANG HS_DOI_CHU_HO
-- =========================
CREATE TABLE HS_DOI_CHU_HO (
    ma_ho_so            VARCHAR(50) PRIMARY KEY,
    ma_ho_gia_dinh      VARCHAR(50) NULL,
    ma_chu_ho_cu        BIGINT NULL,
    ma_chu_ho_moi       BIGINT NULL,
    ly_do               NVARCHAR(MAX) NULL,

    CONSTRAINT FK_HS_DOI_CHU_HO_ma_ho_so
        FOREIGN KEY (ma_ho_so) REFERENCES HO_SO(ma_ho_so),

    CONSTRAINT FK_HS_DOI_CHU_HO_ma_ho_gia_dinh
        FOREIGN KEY (ma_ho_gia_dinh) REFERENCES HO_GIA_DINH(ma_ho_gia_dinh),

    CONSTRAINT FK_HS_DOI_CHU_HO_ma_chu_ho_cu
        FOREIGN KEY (ma_chu_ho_cu) REFERENCES NHAN_KHAU(ma_nhan_khau),

    CONSTRAINT FK_HS_DOI_CHU_HO_ma_chu_ho_moi
        FOREIGN KEY (ma_chu_ho_moi) REFERENCES NHAN_KHAU(ma_nhan_khau)
);
GO

-- =========================
-- 19. BANG HS_CHUYEN_HO_KHAU
-- =========================
CREATE TABLE HS_CHUYEN_HO_KHAU (
    ma_ho_so            VARCHAR(50) PRIMARY KEY,
    ma_ho_gia_dinh      VARCHAR(50) NULL,
    dia_chi_cu          NVARCHAR(255) NULL,
    dia_chi_moi         NVARCHAR(255) NULL,
    ly_do               NVARCHAR(MAX) NULL,

    CONSTRAINT FK_HS_CHUYEN_HO_KHAU_ma_ho_so
        FOREIGN KEY (ma_ho_so) REFERENCES HO_SO(ma_ho_so),

    CONSTRAINT FK_HS_CHUYEN_HO_KHAU_ma_ho_gia_dinh
        FOREIGN KEY (ma_ho_gia_dinh) REFERENCES HO_GIA_DINH(ma_ho_gia_dinh)
);
GO

-- =========================
-- 20. BANG LICH_SU_CHUYEN_HO_KHAU
-- =========================
CREATE TABLE LICH_SU_CHUYEN_HO_KHAU (
    ma_lich_su          BIGINT IDENTITY(1,1) PRIMARY KEY,
    ma_nhan_khau        BIGINT NOT NULL,
    ma_ho_cu            VARCHAR(50) NULL,
    ma_ho_moi           VARCHAR(50) NULL,
    ngay_chuyen         DATETIME2 NOT NULL DEFAULT SYSDATETIME(),
    ly_do               NVARCHAR(MAX) NULL,
    ma_ho_so            VARCHAR(50) NULL,

    CONSTRAINT FK_LS_CHUYEN_HK_ma_nhan_khau
        FOREIGN KEY (ma_nhan_khau) REFERENCES NHAN_KHAU(ma_nhan_khau),

    CONSTRAINT FK_LS_CHUYEN_HK_ma_ho_cu
        FOREIGN KEY (ma_ho_cu) REFERENCES HO_GIA_DINH(ma_ho_gia_dinh),

    CONSTRAINT FK_LS_CHUYEN_HK_ma_ho_moi
        FOREIGN KEY (ma_ho_moi) REFERENCES HO_GIA_DINH(ma_ho_gia_dinh),

    CONSTRAINT FK_LS_CHUYEN_HK_ma_ho_so
        FOREIGN KEY (ma_ho_so) REFERENCES HO_SO(ma_ho_so)
);
GO

-- =========================
-- 21. BANG LICH_SU_DOI_CHU_HO
-- =========================
CREATE TABLE LICH_SU_DOI_CHU_HO (
    ma_lich_su          BIGINT IDENTITY(1,1) PRIMARY KEY,
    ma_ho_gia_dinh      VARCHAR(50) NOT NULL,
    ma_chu_ho_cu        BIGINT NULL,
    ma_chu_ho_moi       BIGINT NULL,
    ngay_doi            DATETIME2 NOT NULL DEFAULT SYSDATETIME(),
    ly_do               NVARCHAR(MAX) NULL,
    ma_ho_so            VARCHAR(50) NULL,

    CONSTRAINT FK_LS_DOI_CHU_HO_ma_ho_gia_dinh
        FOREIGN KEY (ma_ho_gia_dinh) REFERENCES HO_GIA_DINH(ma_ho_gia_dinh),

    CONSTRAINT FK_LS_DOI_CHU_HO_ma_chu_ho_cu
        FOREIGN KEY (ma_chu_ho_cu) REFERENCES NHAN_KHAU(ma_nhan_khau),

    CONSTRAINT FK_LS_DOI_CHU_HO_ma_chu_ho_moi
        FOREIGN KEY (ma_chu_ho_moi) REFERENCES NHAN_KHAU(ma_nhan_khau),

    CONSTRAINT FK_LS_DOI_CHU_HO_ma_ho_so
        FOREIGN KEY (ma_ho_so) REFERENCES HO_SO(ma_ho_so)
);
GO

INSERT INTO VAI_TRO (ten_vai_tro, mo_ta) VALUES
(N'Admin', N'Quản trị hệ thống'),
(N'Cán bộ', N'Xử lý hồ sơ'),
(N'Người dân', N'Sử dụng dịch vụ'),
(N'Trưởng khu', N'Quản lý khu vực'),
(N'Khách', N'Truy cập hạn chế');
go

INSERT INTO NHAN_KHAU (cccd, ho_ten, ngay_sinh, gioi_tinh, noi_sinh, so_dien_thoai, trang_thai_nhan_khau)
VALUES
('001', N'Nguyễn Văn A', '1990-01-01', N'Nam', N'Hà Nội', '090000001', N'Hoạt động'),
('002', N'Trần Thị B', '1992-02-02', N'Nữ', N'Đà Nẵng', '090000002', N'Hoạt động'),
('003', N'Lê Văn C', '1985-03-03', N'Nam', N'HCM', '090000003', N'Hoạt động'),
('004', N'Phạm Thị D', '2000-04-04', N'Nữ', N'Huế', '090000004', N'Hoạt động'),
('005', N'Hoàng Văn E', '1995-05-05', N'Nam', N'Cần Thơ', '090000005', N'Hoạt động');
go

INSERT INTO HO_GIA_DINH (ma_ho_gia_dinh, dia_chi, khu_vuc, to_dan_pho, trang_thai)
VALUES
('H1', N'Địa chỉ 1', N'KV1', N'TDP1', N'Hoạt động'),
('H2', N'Địa chỉ 2', N'KV1', N'TDP2', N'Hoạt động'),
('H3', N'Địa chỉ 3', N'KV2', N'TDP3', N'Hoạt động'),
('H4', N'Địa chỉ 4', N'KV2', N'TDP4', N'Hoạt động'),
('H5', N'Địa chỉ 5', N'KV3', N'TDP5', N'Hoạt động');
go

INSERT INTO TAI_KHOAN (ten_dang_nhap, email, mat_khau, ma_vai_tro, ma_nhan_khau, trang_thai)
VALUES
('admin', 'admin@gmail.com', '123', 1, 1, N'Hoạt động'),
('canbo1', 'cb1@gmail.com', '123', 2, 2, N'Hoạt động'),
('user1', 'user1@gmail.com', '123', 3, 3, N'Hoạt động'),
('truongkhu', 'tk@gmail.com', '123', 4, 4, N'Hoạt động'),
('guest', 'guest@gmail.com', '123', 5, 5, N'Hoạt động');
go

INSERT INTO THANH_VIEN_HO (ma_ho_gia_dinh, ma_nhan_khau, quan_he_voi_chu_ho, la_chu_ho, trang_thai)
VALUES
('H1', 1, N'Chủ hộ', 1, N'Hoạt động'),
('H2', 2, N'Chủ hộ', 1, N'Hoạt động'),
('H3', 3, N'Chủ hộ', 1, N'Hoạt động'),
('H4', 4, N'Chủ hộ', 1, N'Hoạt động'),
('H5', 5, N'Chủ hộ', 1, N'Hoạt động');
go

INSERT INTO HO_SO
(ma_ho_so, loai_ho_so, ma_nguoi_nop, ma_nguoi_xu_ly, ma_ho_gia_dinh, ma_nhan_khau, trang_thai)
VALUES
('HS201', N'Thường trú', 1, 1, 'H1', 1, N'Chờ xử lý'),
('HS202', N'Tạm trú', 2, 2, 'H2', 2, N'Đang xử lý'),
('HS203', N'Tạm vắng', 3, 3, 'H3', 3, N'Hoàn thành'),
('HS204', N'Khai sinh', 4, 4, 'H4', 4, N'Chờ xử lý'),
('HS205', N'Khai tử', 5, 5, 'H5', 5, N'Đang xử lý');
GO

INSERT INTO BAO_CAO (ma_tai_khoan, loai_bao_cao)
VALUES
(1, N'Thống kê'),
(2, N'Dân số'),
(3, N'Hộ khẩu'),
(4, N'Tạm trú'),
(5, N'Khác');
go

INSERT INTO TEP_DINH_KEM (ma_ho_so, ten_file, duong_dan_file)
VALUES
('HS201', N'file1.pdf', N'/files/1'),
('HS202', N'file2.pdf', N'/files/2'),
('HS203', N'file3.pdf', N'/files/3'),
('HS204', N'file4.pdf', N'/files/4'),
('HS205', N'file5.pdf', N'/files/5');
GO

INSERT INTO LICH_SU_XU_LY (ma_ho_so, ma_tai_khoan, hanh_dong)
VALUES
('HS201', 1, N'Tạo'),
('HS202', 2, N'Duyệt'),
('HS203', 3, N'Hoàn thành'),
('HS204', 4, N'Cập nhật'),
('HS205', 5, N'Từ chối');
GO

INSERT INTO THONG_BAO (ma_tai_khoan, ma_ho_so, tieu_de)
VALUES
(1, 'HS201', N'Thông báo 1'),
(2, 'HS202', N'Thông báo 2'),
(3, 'HS203', N'Thông báo 3'),
(4, 'HS204', N'Thông báo 4'),
(5, 'HS205', N'Thông báo 5');
GO

INSERT INTO HS_THUONG_TRU (ma_ho_so, dia_chi_dang_ky, thong_tin_ho_gia_dinh)
VALUES
('HS201', N'Địa chỉ TT1', N'Info'),
('HS202', N'Địa chỉ TT2', N'Info'),
('HS203', N'Địa chỉ TT3', N'Info'),
('HS204', N'Địa chỉ TT4', N'Info'),
('HS205', N'Địa chỉ TT5', N'Info');
GO

INSERT INTO HS_TAM_TRU (ma_ho_so, dia_chi_tam_tru, tu_ngay, den_ngay, ly_do)
VALUES
('HS201', N'Địa chỉ TT', '2024-01-01','2024-12-31',N'Lý do'),
('HS202', N'Địa chỉ TT', '2024-01-01','2024-12-31',N'Lý do'),
('HS203', N'Địa chỉ TT', '2024-01-01','2024-12-31',N'Lý do'),
('HS204', N'Địa chỉ TT', '2024-01-01','2024-12-31',N'Lý do'),
('HS205', N'Địa chỉ TT', '2024-01-01','2024-12-31',N'Lý do');
GO

INSERT INTO HS_TAM_VANG (ma_ho_so, tu_ngay, den_ngay, noi_den, ly_do)
VALUES
('HS201','2024-01-01','2024-02-01',N'HN',N'CV'),
('HS202','2024-01-01','2024-02-01',N'HN',N'CV'),
('HS203','2024-01-01','2024-02-01',N'HN',N'CV'),
('HS204','2024-01-01','2024-02-01',N'HN',N'CV'),
('HS205','2024-01-01','2024-02-01',N'HN',N'CV');
GO

INSERT INTO HS_KHAI_SINH VALUES
('HS201',N'Trẻ A','2020-01-01',N'Nam',N'HN',1,2),
('HS202',N'Trẻ B','2020-01-01',N'Nữ',N'HN',2,3),
('HS203',N'Trẻ C','2020-01-01',N'Nam',N'HN',3,4),
('HS204', N'Trẻ D', '2020-01-01', N'Nữ', N'HN', 4, 5),
('HS205',N'Trẻ E','2020-01-01',N'Nam',N'HN',1,2);
go

INSERT INTO HS_KHAI_TU VALUES
('HS201',1,'2024-01-01',N'HN',N'Bệnh',2),
('HS202',2,'2024-01-01',N'HN',N'Bệnh',3),
('HS203',3,'2024-01-01',N'HN',N'Bệnh',4),
('HS204',4,'2024-01-01',N'HN',N'Bệnh',5),
('HS205',5,'2024-01-01',N'HN',N'Bệnh',1);
go

INSERT INTO HS_TACH_HO (ma_ho_so, ma_ho_cu, dia_chi_ho_moi, ly_do)
VALUES
('HS201', 'H1', N'Địa chỉ mới 1', N'Tách hộ'),
('HS202', 'H2', N'Địa chỉ mới 2', N'Tách hộ'),
('HS203', 'H3', N'Địa chỉ mới 3', N'Tách hộ'),
('HS204', 'H4', N'Địa chỉ mới 4', N'Tách hộ'),
('HS205', 'H5', N'Địa chỉ mới 5', N'Tách hộ');
GO

INSERT INTO HS_NHAP_HO (ma_ho_so, ma_ho_dich, ma_nhan_khau_nhap, quan_he_voi_chu_ho, ly_do)
VALUES
('HS201', 'H1', 1, N'Con', N'Nhập hộ'),
('HS202', 'H2', 2, N'Vợ', N'Nhập hộ'),
('HS203', 'H3', 3, N'Con', N'Nhập hộ'),
('HS204', 'H4', 4, N'Anh', N'Nhập hộ'),
('HS205', 'H5', 5, N'Chị', N'Nhập hộ');
GO

INSERT INTO HS_DOI_CHU_HO (ma_ho_so, ma_ho_gia_dinh, ma_chu_ho_cu, ma_chu_ho_moi, ly_do)
VALUES
('HS201', 'H1', 1, 2, N'Đổi chủ hộ'),
('HS202', 'H2', 2, 3, N'Đổi chủ hộ'),
('HS203', 'H3', 3, 4, N'Đổi chủ hộ'),
('HS204', 'H4', 4, 5, N'Đổi chủ hộ'),
('HS205', 'H5', 5, 1, N'Đổi chủ hộ');
GO

INSERT INTO HS_CHUYEN_HO_KHAU (ma_ho_so, ma_ho_gia_dinh, dia_chi_cu, dia_chi_moi, ly_do)
VALUES
('HS201', 'H1', N'Địa chỉ cũ 1', N'Địa chỉ mới 1', N'Chuyển hộ'),
('HS202', 'H2', N'Địa chỉ cũ 2', N'Địa chỉ mới 2', N'Chuyển hộ'),
('HS203', 'H3', N'Địa chỉ cũ 3', N'Địa chỉ mới 3', N'Chuyển hộ'),
('HS204', 'H4', N'Địa chỉ cũ 4', N'Địa chỉ mới 4', N'Chuyển hộ'),
('HS205', 'H5', N'Địa chỉ cũ 5', N'Địa chỉ mới 5', N'Chuyển hộ');
GO

INSERT INTO LICH_SU_CHUYEN_HO_KHAU (ma_nhan_khau, ma_ho_cu, ma_ho_moi, ly_do, ma_ho_so)
VALUES
(1, 'H1', 'H2', N'Chuyển nơi ở', 'HS201'),
(2, 'H2', 'H3', N'Chuyển nơi ở', 'HS202'),
(3, 'H3', 'H4', N'Chuyển nơi ở', 'HS203'),
(4, 'H4', 'H5', N'Chuyển nơi ở', 'HS204'),
(5, 'H5', 'H1', N'Chuyển nơi ở', 'HS205');
GO

INSERT INTO LICH_SU_DOI_CHU_HO (ma_ho_gia_dinh, ma_chu_ho_cu, ma_chu_ho_moi, ly_do, ma_ho_so)
VALUES
('H1', 1, 2, N'Đổi chủ hộ', 'HS201'),
('H2', 2, 3, N'Đổi chủ hộ', 'HS202'),
('H3', 3, 4, N'Đổi chủ hộ', 'HS203'),
('H4', 4, 5, N'Đổi chủ hộ', 'HS204'),
('H5', 5, 1, N'Đổi chủ hộ', 'HS205');
GO

--============= NGUYỄN CỬU THÀNH ĐẠT ===================
CREATE PROCEDURE sp_them_ho_so
    @ma_ho_so VARCHAR(50),
    @loai_ho_so NVARCHAR(100),
    @ma_nguoi_nop BIGINT,
    @ma_ho_gia_dinh VARCHAR(50),
    @ma_nhan_khau BIGINT,
    @ghi_chu NVARCHAR(MAX) = NULL
AS
BEGIN
    SET NOCOUNT ON;

    -- Insert hồ sơ
    INSERT INTO HO_SO (
        ma_ho_so,
        loai_ho_so,
        ma_nguoi_nop,
        ma_ho_gia_dinh,
        ma_nhan_khau,
        trang_thai,
        ghi_chu
    )
    VALUES (
        @ma_ho_so,
        @loai_ho_so,
        @ma_nguoi_nop,
        @ma_ho_gia_dinh,
        @ma_nhan_khau,
        N'CHO_XU_LY',
        @ghi_chu
    );

    -- Tạo thông báo cho admin (giả sử ID = 1)
    INSERT INTO THONG_BAO (
        ma_tai_khoan,
        ma_ho_so,
        tieu_de,
        noi_dung
    )
    VALUES (
        1,
        @ma_ho_so,
        N'Hồ sơ mới',
        N'Có hồ sơ mới cần xử lý: ' + @ma_ho_so
    );
END
GO

CREATE TRIGGER trg_update_ho_so
ON HO_SO
AFTER UPDATE
AS
BEGIN
    SET NOCOUNT ON;

    -- Ghi lịch sử xử lý
    INSERT INTO LICH_SU_XU_LY (
        ma_ho_so,
        ma_tai_khoan,
        hanh_dong,
        trang_thai_cu,
        trang_thai_moi,
        ghi_chu
    )
    SELECT 
        i.ma_ho_so,
        ISNULL(i.ma_nguoi_xu_ly, 1),
        N'Cập nhật trạng thái',
        d.trang_thai,
        i.trang_thai,
        i.ghi_chu
    FROM inserted i
    JOIN deleted d ON i.ma_ho_so = d.ma_ho_so
    WHERE ISNULL(i.trang_thai, '') <> ISNULL(d.trang_thai, '');

    -- Gửi thông báo cho người nộp
    INSERT INTO THONG_BAO (
        ma_tai_khoan,
        ma_ho_so,
        tieu_de,
        noi_dung
    )
    SELECT 
        i.ma_nguoi_nop,
        i.ma_ho_so,
        N'Cập nhật hồ sơ',
        N'Hồ sơ ' + i.ma_ho_so + N' đã chuyển sang trạng thái: ' + i.trang_thai
    FROM inserted i
    JOIN deleted d ON i.ma_ho_so = d.ma_ho_so
    WHERE ISNULL(i.trang_thai, '') <> ISNULL(d.trang_thai, '');
END
GO



--=============PHAN VIỆT HOÀNG ===================
--1.8 Gửi yêu cầu đăng ký khai sinh
-- 1. Gửi hồ sơ khai sinh
CREATE PROCEDURE sp_GuiHoSoKhaiSinh_Moi
    @ma_ho_so VARCHAR(50),
    @ma_nguoi_nop BIGINT,
    @ma_ho_gia_dinh VARCHAR(50),
    @ma_nhan_khau BIGINT,
    @ho_ten_tre NVARCHAR(150),
    @ngay_sinh DATE,
    @gioi_tinh NVARCHAR(20),
    @noi_sinh NVARCHAR(255),
    @ma_cha BIGINT = NULL,
    @ma_me BIGINT = NULL
AS
BEGIN
    BEGIN TRY
        BEGIN TRANSACTION;

        -- 1. Insert HO_SO
        INSERT INTO HO_SO (
            ma_ho_so, loai_ho_so, ma_nguoi_nop,
            ma_ho_gia_dinh, ma_nhan_khau, trang_thai
        )
        VALUES (
            @ma_ho_so, N'Khai sinh', @ma_nguoi_nop,
            @ma_ho_gia_dinh, @ma_nhan_khau, N'Chờ xử lý'
        );

        -- 2. Insert HS_KHAI_SINH
        INSERT INTO HS_KHAI_SINH (
            ma_ho_so, ho_ten_tre, ngay_sinh,
            gioi_tinh, noi_sinh, ma_cha, ma_me
        )
        VALUES (
            @ma_ho_so, @ho_ten_tre, @ngay_sinh,
            @gioi_tinh, @noi_sinh, @ma_cha, @ma_me
        );

        -- 3. Lịch sử
        INSERT INTO LICH_SU_XU_LY (ma_ho_so, ma_tai_khoan, hanh_dong)
        VALUES (@ma_ho_so, @ma_nguoi_nop, N'Tạo hồ sơ');

        -- 4. Thông báo
        INSERT INTO THONG_BAO (ma_tai_khoan, ma_ho_so, tieu_de)
        VALUES (@ma_nguoi_nop, @ma_ho_so, N'Đã gửi hồ sơ khai sinh');

        COMMIT;
    END TRY
    BEGIN CATCH
        ROLLBACK;
        THROW;
    END CATCH
END;
go

--THỰC THI
EXEC sp_GuiHoSoKhaiSinh_Moi
    @ma_ho_so = 'HS200',
    @ma_nguoi_nop = 1,
    @ma_ho_gia_dinh = 'H1',
    @ma_nhan_khau = 1,
    @ho_ten_tre = N'Nguyễn Văn Test',
    @ngay_sinh = '2020-05-05',
    @gioi_tinh = N'Nam',
    @noi_sinh = N'Đà Nẵng',
    @ma_cha = 2,
    @ma_me = 3;

SELECT * FROM HO_SO WHERE ma_ho_so = 'HS200';
SELECT * FROM HS_KHAI_SINH WHERE ma_ho_so = 'HS200';
SELECT * FROM THONG_BAO WHERE ma_ho_so = 'HS200';
SELECT * FROM LICH_SU_XU_LY WHERE ma_ho_so = 'HS200';
go

-- 2.Kiểm tra logic khai sinh 
CREATE FUNCTION fn_KiemTraKhaiSinh
(
    @ngay_sinh DATE,
    @ma_cha BIGINT,
    @ma_me BIGINT
)
RETURNS BIT
AS
BEGIN
    DECLARE @kq BIT = 1;

    IF (@ngay_sinh > GETDATE())
        SET @kq = 0;

    RETURN @kq;
END;
go

--THỰC THI
--Test hợp lệ:
SELECT dbo.fn_KiemTraKhaiSinh('2020-01-01', 1, 2) AS KetQua;
-- Test lỗi (ngày sinh tương lai):
SELECT dbo.fn_KiemTraKhaiSinh('2030-01-01', 1, 2) AS KetQua;
go


--3. TỰ ĐỘNG ĐỔI CHỦ HỘ KHI DUYỆT HỒ SƠ
CREATE TRIGGER trg_TuDongDoiChuHo
ON HO_SO
AFTER UPDATE
AS
BEGIN
    -- Chỉ xử lý hồ sơ đổi chủ hộ đã hoàn thành
    IF EXISTS (
        SELECT 1 FROM inserted i
        WHERE i.loai_ho_so = N'Đổi chủ hộ'
        AND i.trang_thai = N'Hoàn thành'
    )
    BEGIN
        -- Bỏ chủ hộ cũ
        UPDATE tv
        SET la_chu_ho = 0
        FROM THANH_VIEN_HO tv
        JOIN HS_DOI_CHU_HO hs ON tv.ma_ho_gia_dinh = hs.ma_ho_gia_dinh
        JOIN inserted i ON hs.ma_ho_so = i.ma_ho_so
        WHERE tv.ma_nhan_khau = hs.ma_chu_ho_cu;

        -- Gán chủ hộ mới
        UPDATE tv
        SET la_chu_ho = 1
        FROM THANH_VIEN_HO tv
        JOIN HS_DOI_CHU_HO hs ON tv.ma_ho_gia_dinh = hs.ma_ho_gia_dinh
        JOIN inserted i ON hs.ma_ho_so = i.ma_ho_so
        WHERE tv.ma_nhan_khau = hs.ma_chu_ho_moi;

        -- Lưu lịch sử
        INSERT INTO LICH_SU_DOI_CHU_HO (
            ma_ho_gia_dinh, ma_chu_ho_cu, ma_chu_ho_moi, ma_ho_so, ly_do
        )
        SELECT 
            hs.ma_ho_gia_dinh,
            hs.ma_chu_ho_cu,
            hs.ma_chu_ho_moi,
            hs.ma_ho_so,
            hs.ly_do
        FROM HS_DOI_CHU_HO hs
        JOIN inserted i ON hs.ma_ho_so = i.ma_ho_so;
    END
END;
go

UPDATE HO_SO
SET 
    trang_thai = N'Hoàn thành',
    ma_nguoi_xu_ly = 2,
    ngay_xu_ly = GETDATE()
WHERE ma_ho_so = 'HS300';

SELECT * FROM THANH_VIEN_HO WHERE ma_ho_gia_dinh = 'H1';
SELECT * FROM HO_SO WHERE ma_ho_so = 'HS300';
go

--2.11 Gửi yêu cầu tách hộ
-- 1. TẠO HỘ MỚI tự đông tách hộ
CREATE TRIGGER trg_TuDongTachHo
ON HO_SO
AFTER UPDATE
AS
BEGIN
    IF EXISTS (
        SELECT 1 FROM inserted
        WHERE loai_ho_so = N'Tách hộ'
        AND trang_thai = N'Hoàn thành'
    )
    BEGIN
        INSERT INTO HO_GIA_DINH (
            ma_ho_gia_dinh, dia_chi, trang_thai
        )
        SELECT 
            'H_NEW_' + i.ma_ho_so,
            hs.dia_chi_ho_moi,
            N'Hoạt động'
        FROM inserted i
        JOIN HS_TACH_HO hs ON i.ma_ho_so = hs.ma_ho_so;
    END
END;
go

--THỰC THI
UPDATE HO_SO
SET 
    trang_thai = N'Hoàn thành',
    ma_nguoi_xu_ly = 2,
    ngay_xu_ly = GETDATE()
WHERE ma_ho_so = 'HS600';

SELECT * FROM HO_GIA_DINH WHERE ma_ho_gia_dinh LIKE 'H_NEW%';
go


--  ================== CÁI THỊ NHÂN ĐỨC ========================
CREATE PROCEDURE sp_xem_lich_su_duyet_ho_so
    @ma_ho_so VARCHAR(50) = NULL
AS
BEGIN
    SET NOCOUNT ON;

    SELECT 
        ls.ma_lich_su,
        ls.ma_ho_so,
        hs.loai_ho_so,
        tk.ten_dang_nhap AS can_bo_xu_ly,
        ls.hanh_dong,
        ls.trang_thai_cu,
        ls.trang_thai_moi,
        ls.ghi_chu,
        ls.thoi_gian_xu_ly
    FROM LICH_SU_XU_LY ls
    JOIN HO_SO hs ON hs.ma_ho_so = ls.ma_ho_so
    JOIN TAI_KHOAN tk ON tk.ma_tai_khoan = ls.ma_tai_khoan
    WHERE @ma_ho_so IS NULL OR ls.ma_ho_so = @ma_ho_so
    ORDER BY ls.thoi_gian_xu_ly DESC;
END;
GO
EXEC sp_xem_lich_su_duyet_ho_so;
EXEC sp_xem_lich_su_duyet_ho_so @ma_ho_so = 'HS202';
go

CREATE PROCEDURE sp_xem_ho_gia_dinh
    @ma_ho_gia_dinh VARCHAR(50)
AS
BEGIN
    SET NOCOUNT ON;

    SELECT 
        h.ma_ho_gia_dinh,
        h.dia_chi,
        h.khu_vuc,
        h.to_dan_pho,
        h.trang_thai,
        nk.ma_nhan_khau,
        nk.ho_ten,
        nk.ngay_sinh,
        nk.gioi_tinh,
        nk.cccd,
        tvh.quan_he_voi_chu_ho,
        tvh.la_chu_ho,
        tvh.trang_thai AS trang_thai_thanh_vien
    FROM HO_GIA_DINH h
    JOIN THANH_VIEN_HO tvh ON h.ma_ho_gia_dinh = tvh.ma_ho_gia_dinh
    JOIN NHAN_KHAU nk ON nk.ma_nhan_khau = tvh.ma_nhan_khau
    WHERE h.ma_ho_gia_dinh = @ma_ho_gia_dinh;
END;
GO
EXEC sp_xem_ho_gia_dinh @ma_ho_gia_dinh = 'H1';
SELECT * FROM HO_GIA_DINH;
go


CREATE FUNCTION fn_dem_ho_so_cho_duyet
(
    @loai_ho_so NVARCHAR(100)
)
RETURNS INT
AS
BEGIN
    DECLARE @so_luong INT;

    SELECT @so_luong = COUNT(*)
    FROM HO_SO
    WHERE loai_ho_so = @loai_ho_so
      AND trang_thai = N'CHO_XU_LY';

    RETURN @so_luong;
END;
GO
SELECT dbo.fn_dem_ho_so_cho_duyet(N'KHAI_SINH') AS so_luong;
SELECT dbo.fn_dem_ho_so_cho_duyet(N'TAM_TRU') AS so_luong;
go

--====================== VÕ ĐỨC TỐNG =======================
--Tạo function
CREATE FUNCTION fn_kiem_tra_tach_ho
(
    @ma_ho_gia_dinh VARCHAR(50)
)
RETURNS NVARCHAR(255)
AS
BEGIN
    DECLARE @ket_qua NVARCHAR(255);
    DECLARE @so_thanh_vien INT;
    DECLARE @co_chu_ho BIT;
    
    SELECT @so_thanh_vien = COUNT(*)
    FROM THANH_VIEN_HO
    WHERE ma_ho_gia_dinh = @ma_ho_gia_dinh
      AND (trang_thai IS NULL OR trang_thai = N'Hoạt động');
    
    IF EXISTS (
        SELECT 1 FROM THANH_VIEN_HO
        WHERE ma_ho_gia_dinh = @ma_ho_gia_dinh AND la_chu_ho = 1
    )
        SET @co_chu_ho = 1;
    ELSE
        SET @co_chu_ho = 0;
    
    IF @so_thanh_vien >= 2 AND @co_chu_ho = 1
        SET @ket_qua = N'Hộ có thể tách';
    ELSE IF @so_thanh_vien < 2
        SET @ket_qua = N'Hộ cần ít nhất 2 thành viên để tách';
    ELSE IF @co_chu_ho = 0
        SET @ket_qua = N'Hộ chưa có chủ hộ';
    ELSE
        SET @ket_qua = N'Vui lòng kiểm tra lại thông tin hộ';
    
    RETURN @ket_qua;
END
GO


-- Tạo Procedure
CREATE PROCEDURE sp_duyet_tach_ho
    @ma_ho_so VARCHAR(50),
    @ma_nguoi_xu_ly BIGINT,
    @trang_thai_moi NVARCHAR(50),
    @ghi_chu NVARCHAR(MAX) = NULL
AS
BEGIN
    IF NOT EXISTS (SELECT 1 FROM HO_SO WHERE ma_ho_so = @ma_ho_so)
    BEGIN
        RETURN;
    END
    
    IF @trang_thai_moi NOT IN (N'Đã duyệt', N'Từ chối', N'Yêu cầu bổ sung')
    BEGIN
        RETURN;
    END

    DECLARE @trang_thai_cu NVARCHAR(50);
    SELECT @trang_thai_cu = trang_thai FROM HO_SO WHERE ma_ho_so = @ma_ho_so;

    UPDATE HO_SO 
    SET 
        trang_thai = @trang_thai_moi,
        ma_nguoi_xu_ly = @ma_nguoi_xu_ly,
        ngay_xu_ly = GETDATE(),
        ghi_chu = @ghi_chu
    WHERE ma_ho_so = @ma_ho_so;

    INSERT INTO LICH_SU_XU_LY (ma_ho_so, ma_tai_khoan, hanh_dong, trang_thai_cu, trang_thai_moi, ghi_chu)
    VALUES (@ma_ho_so, @ma_nguoi_xu_ly, N'Duyệt hồ sơ', @trang_thai_cu, @trang_thai_moi, @ghi_chu);

    DECLARE @ma_nguoi_nop BIGINT;
    SELECT @ma_nguoi_nop = ma_nguoi_nop FROM HO_SO WHERE ma_ho_so = @ma_ho_so;
    
    INSERT INTO THONG_BAO (ma_tai_khoan, ma_ho_so, tieu_de, noi_dung)
    VALUES (@ma_nguoi_nop, @ma_ho_so, N'Kết quả xử lý hồ sơ', 
            N'Hồ sơ ' + @ma_ho_so + N' đã được xử lý. Kết quả: ' + @trang_thai_moi);
END
GO

-- Tạo Trigger
CREATE TRIGGER trg_cap_nhat_quan_he_khi_doi_chu_ho
ON THANH_VIEN_HO
AFTER UPDATE
AS
BEGIN
    IF UPDATE(la_chu_ho)
    BEGIN
        UPDATE THANH_VIEN_HO
        SET quan_he_voi_chu_ho = N'Chủ hộ'
        WHERE ma_nhan_khau IN (
            SELECT i.ma_nhan_khau
            FROM inserted i
            INNER JOIN deleted d 
                ON i.ma_ho_gia_dinh = d.ma_ho_gia_dinh 
                AND i.ma_nhan_khau = d.ma_nhan_khau
            WHERE i.la_chu_ho = 1 AND d.la_chu_ho = 0
        );

        UPDATE THANH_VIEN_HO
        SET quan_he_voi_chu_ho = N'Thành viên'
        WHERE ma_ho_gia_dinh IN (
            SELECT DISTINCT i.ma_ho_gia_dinh
            FROM inserted i
            INNER JOIN deleted d 
                ON i.ma_ho_gia_dinh = d.ma_ho_gia_dinh 
                AND i.ma_nhan_khau = d.ma_nhan_khau
            WHERE i.la_chu_ho = 1 AND d.la_chu_ho = 0
        )
        AND la_chu_ho = 0;
    END
END
GO
