const candidates: readonly Constituency[] = [
  {
    code: 'P001',
    name: 'Padang Besar',
    candidates: [
      { name: 'Zahidi Zainul Abidin', party: 'UMNO', coalition: 'BN' },
      { name: 'Ko Chu Liang', party: 'WARISAN' },
      { name: 'Rushdan Rusmi', party: 'PAS', coalition: 'PN' },
      { name: 'Zahidi Zainul Abidin', party: 'Independent' },
      { name: 'Mohamad Saad@Yahya', party: 'AMANAH', coalition: 'PH' },
    ],},{
    code: 'P002',
    name: 'Kangar',
    candidates: [
      { name: 'Noor Amin Ahmad', party: 'PKR', coalition: 'PH' },
      { name: 'Rohimi Shapiee', party: 'WARISAN' },
      { name: 'Zakri Hassan', party: 'BERSATU', coalition: 'PN' },
      { name: 'Nur Sulaiman Zolkapli', party: 'PEJUANG', coalition: 'GTA' },
      { name: 'Fathul Bari Mat Jahya', party: 'UMNO', coalition: 'BN' },
    ],},{
    code: 'P003',
    name: 'Arau',
    candidates: [
      { name: 'Rozabil Abd Rahman', party: 'UMNO', coalition: 'BN' },
      { name: 'Shahidan Kassim', party: 'PAS', coalition: 'PN' },
      { name: 'Fathin Amelina', party: 'PKR', coalition: 'PH' },
    ],},{
    code: 'P004',
    name: 'Langkawi',
    candidates: [
      { name: 'Mahathir Mohamad', party: 'PEJUANG', coalition: 'GTA' },
      { name: 'Zabidi Yahya', party: 'AMANAH', coalition: 'PH' },
      { name: 'Abdul Kadir Sainudin', party: 'Independent' },
      { name: 'Suhaimi Abdullah', party: 'BERSATU', coalition: 'PN' },
      { name: 'Armishah Siraj', party: 'UMNO', coalition: 'BN' },
    ],},{
    code: 'P005',
    name: 'Jerlun',
    candidates: [
      { name: 'Mukhriz Mahathir', party: 'PEJUANG', coalition: 'GTA' },
      { name: 'Othman Aziz', party: 'UMNO', coalition: 'BN' },
      { name: 'Abdul Ghani Ahmad', party: 'PAS', coalition: 'PN' },
      { name: 'Mohamed Fadzil Mohd Ali', party: 'PKR', coalition: 'PH' },
    ],},{
    code: 'P006',
    name: 'Kubang Pasu',
    candidates: [
      { name: 'Amiruddin Hamzah', party: 'PEJUANG', coalition: 'GTA' },
      { name: 'Hasmuni Hassan', party: 'UMNO', coalition: 'BN' },
      { name: 'Ku Abdulrahman Ku Ismail', party: 'BERSATU', coalition: 'PN' },
      { name: 'Aizuddin Ariffin', party: 'PKR', coalition: 'PH' },
    ],},{
    code: 'P007',
    name: 'Padang Terap',
    candidates: [
      { name: 'Mahdzir Khalid', party: 'UMNO', coalition: 'BN' },
      { name: 'Nurul Amin Hamid', party: 'PAS', coalition: 'PN' },
      { name: 'Razali Lebai Salleh', party: 'PEJUANG', coalition: 'GTA' },
      { name: 'Muaz Abdullah', party: 'AMANAH', coalition: 'PH' },
    ],},{
    code: 'P008',
    name: 'Pokok Sena',
    candidates: [
      { name: 'Mahfuz Omar', party: 'AMANAH', coalition: 'PH' },
      { name: 'Noraini Md Salleh', party: 'WARISAN' },
      { name: 'Ahamd Saad@Yahaya', party: 'PAS', coalition: 'PN' },
      { name: 'Noran Zamini Jamaluddin', party: 'UMNO', coalition: 'BN' },
    ],},{
    code: 'P009',
    name: 'Alor Setar',
    candidates: [
      { name: 'Simon Ooi Tze Min', party: 'PKR', coalition: 'PH' },
      { name: 'Fadzil Hanafi', party: 'WARISAN' },
      { name: 'Nordin Yunus', party: 'Independent' },
      { name: 'Sofan Feroza Md. Yusup', party: 'Independent' },
      { name: 'Mohd Nuhairi Rahmat', party: 'PEJUANG', coalition: 'GTA' },
      { name: 'Afnan Hamimi Taib Azamuddin', party: 'PAS', coalition: 'PN' },
      { name: 'Tan Chee Hiong', party: 'MCA', coalition: 'BN' },
    ],},{
    code: 'P010',
    name: 'Kuala Kedah',
    candidates: [
      { name: 'Azman Ismail', party: 'PKR', coalition: 'PH' },
      { name: 'Syed Araniri Al Idrus', party: 'WARISAN' },
      { name: 'Ahmad Fakhruddin Fakhrurazi', party: 'PAS', coalition: 'PN' },
      { name: 'Ulya Aqamah Husamudin', party: 'PEJUANG', coalition: 'GTA' },
      { name: 'Mashitah Ibrahim', party: 'UMNO', coalition: 'BN' },
    ],},{
    code: 'P011',
    name: 'Pendang',
    candidates: [
      { name: 'Awang Solahudin Hashim', party: 'PAS', coalition: 'PN' },
      { name: 'Suraya Yaacob', party: 'UMNO', coalition: 'BN' },
      { name: 'Abdul Rashid Yub', party: 'GB', coalition: 'GTA' },
      { name: 'Zulkifly Mohamad', party: 'PKR', coalition: 'PH' },
    ],},{
    code: 'P012',
    name: 'Jerai',
    candidates: [
      { name: 'Sabri Azit', party: 'PAS', coalition: 'PN' },
      { name: 'Zulhazmi Shariff', party: 'DAP', coalition: 'PH' },
      { name: 'Mohd Nizam Mahsyar', party: 'GB', coalition: 'GTA' },
      { name: 'Jamir Khir Baharom', party: 'UMNO', coalition: 'BN' },
    ],},{
    code: 'P013',
    name: 'Sik',
    candidates: [
      { name: 'Ahmad Tarmizi Sulaiman', party: 'PAS', coalition: 'PN' },
      { name: 'Latifah Mohd Yatim', party: 'AMANAH', coalition: 'PH' },
      { name: 'Maizatulakmam Othman', party: 'UMNO', coalition: 'BN' },
    ],},{
    code: 'P014',
    name: 'Merbok',
    candidates: [
      { name: 'Nurin Aina', party: 'PKR', coalition: 'PH' },
      { name: 'Mohd Nazri Abu Hassan', party: 'BERSATU', coalition: 'PN' },
      { name: 'Khairul Anuar Ahmad', party: 'WARISAN' },
      { name: 'Mohd Mosin Abdul Razak', party: 'IMAN', coalition: 'GTA' },
      { name: 'Shaiful Hazizy Zainol Abidin', party: 'UMNO', coalition: 'BN' },
    ],},{
    code: 'P015',
    name: 'Sungai Petani',
    candidates: [
      { name: 'Mohammed Taufiq Johari', party: 'PKR', coalition: 'PH' },
      { name: 'Robert Ling Kui Ee', party: 'BERSATU', coalition: 'PN' },
      { name: 'Marzuki Yahya', party: 'PEJUANG', coalition: 'GTA' },
      { name: 'Tan Joon Long @ Tan Chow Kang', party: 'PRM' },
      { name: 'Shahanim Mohamad Yusoff', party: 'UMNO', coalition: 'BN' },
    ],},{
    code: 'P016',
    name: 'Baling',
    candidates: [
      { name: 'Abdul Azeez Abdul Rahim', party: 'UMNO', coalition: 'BN' },
      { name: 'Hassan Saad', party: 'PAS', coalition: 'PN' },
      { name: 'Bashir Abdul Rahman', party: 'PUTRA', coalition: 'GTA' },
      { name: 'Johari Abdullah', party: 'AMANAH', coalition: 'PH' },
    ],},{
    code: 'P017',
    name: 'Padang Serai',
    candidates: [
      { name: 'Karupaiya Mutusami', party: 'PKR', coalition: 'PH' },
      { name: 'Mohd Bakri Hashim', party: 'WARISAN' },
      { name: 'Azman Nasrudin', party: 'BERSATU', coalition: 'PN' },
      { name: 'Hamzah Abdul Rahman', party: 'PUTRA', coalition: 'GTA' },
      { name: 'Sreanandha Rao (Ananda Ak)', party: 'Independent' },
      { name: 'Sivaraj Chandran', party: 'MIC', coalition: 'BN' },
    ],},{
    code: 'P018',
    name: 'Kulim-Bandar Baharu',
    candidates: [
      { name: 'Saifuddin Nasution Ismail', party: 'PKR', coalition: 'PH' },
      { name: 'Roslan Hashim', party: 'BERSATU', coalition: 'PN' },
      { name: 'Muhamad Yusrizal Yusuf', party: 'GB', coalition: 'GTA' },
      { name: 'Muhar Hussain', party: 'UMNO', coalition: 'BN' },
    ],},{
    code: 'P019',
    name: 'Tumpat',
    candidates: [
      { name: 'Che Abdullah Mat Nawi', party: 'UMNO', coalition: 'BN' },
      { name: 'Mumtaz Md. Nawi', party: 'PAS', coalition: 'PN' },
      { name: 'Khairul Azwan Kamaruddin', party: 'WARISAN' },
      { name: 'Wan Mohd Johari Wan Omar', party: 'AMANAH', coalition: 'PH' },
      { name: 'Che Mohamad Aswari Che Ali', party: 'PUTRA', coalition: 'GTA' },
    ],},{
    code: 'P020',
    name: 'Pengkalan Chepa',
    candidates: [
      { name: 'Ahmad Marzuk Shaary', party: 'PAS', coalition: 'PN' },
      { name: 'Mohd Hafiezulniezam Mohd Hasdin', party: 'UMNO', coalition: 'BN' },
      { name: 'Nik Faizah Nik Osman', party: 'AMANAH', coalition: 'PH' },
      { name: 'Wan Ahmad Nasri Wan Ismail', party: 'PEJUANG', coalition: 'GTA' },
      { name: 'Mohd. Redzuan Razali ', party: 'Independent' },
    ],},{
    code: 'P021',
    name: 'Kota Bahru',
    candidates: [
      { name: 'Takiyuddin Hassan', party: 'PAS', coalition: 'PN' },
      { name: 'Rosmadi Ismail', party: 'UMNO', coalition: 'BN' },
      { name: 'Che Musa Che Omar', party: 'PUTRA', coalition: 'GTA' },
      { name: 'Tan Boon Kian @ Andy Tan', party: 'PRM' },
      { name: 'Izat Bukhary Ismail Bukhary', party: 'Independent' },
      { name: 'Hafidzah Mustakim', party: 'AMANAH', coalition: 'PH' },
    ],},{
    code: 'P022',
    name: 'Pasir Mas',
    candidates: [
      { name: 'Ahmad Fadhli Shaari', party: 'PAS', coalition: 'PN' },
      { name: 'Abdul Ghani Harun', party: 'UMNO', coalition: 'BN' },
      { name: 'Nasrul Ali Hassan Abdul Latif', party: 'PUTRA', coalition: 'GTA' },
      { name: 'Husam Musa', party: 'PKR', coalition: 'PH' },
    ],},{
    code: 'P023',
    name: 'Rantau Panjang',
    candidates: [
      { name: 'Siti Zailah Mohd Yusoff', party: 'PAS', coalition: 'PN' },
      { name: 'Zulkarnain Yusoff', party: 'UMNO', coalition: 'BN' },
      { name: 'Wan Shah Jihan Wan Din', party: 'AMANAH', coalition: 'PH' },
      { name: 'Ibrahim Ali', party: 'PUTRA', coalition: 'GTA' },
      { name: 'Mohd Zain Ismail', party: 'PRM' },
    ],},{
    code: 'P024',
    name: 'Kubang Kerian',
    candidates: [
      { name: 'Tuan Ibrahim Tuan Man', party: 'PAS', coalition: 'PN' },
      { name: 'Nurul Amal Mohd Fauzi', party: 'UMNO', coalition: 'BN' },
      { name: 'Mohamad Rizal Razali', party: 'PEJUANG', coalition: 'GTA' },
      { name: 'Wan Ahmad Kamil Wan Abdullah', party: 'AMANAH', coalition: 'PH' },
    ],},{
    code: 'P025',
    name: 'Bachok',
    candidates: [
      { name: 'Mohd Syahir Che Sulaiman', party: 'PAS', coalition: 'PN' },
      { name: 'Mohd Zain Yasim', party: 'UMNO', coalition: 'BN' },
      { name: 'Mohd Zulkifli Zakaria', party: 'Independent' },
      { name: 'Kamarul Azam Abdel Osman', party: 'PUTRA', coalition: 'GTA' },
      { name: 'Nur Azmiza Mamat', party: 'PKR', coalition: 'PH' },
    ],},{
    code: 'P026',
    name: 'Ketereh',
    candidates: [
      { name: 'Marzuani Ardila Ariffin', party: 'UMNO', coalition: 'BN' },
      { name: 'Khilir Mohd Nor', party: 'BERSATU', coalition: 'PN' },
      { name: 'Hanif Ibrahim', party: 'PUTRA', coalition: 'GTA' },
      { name: 'Rahimi Muhamad', party: 'PKR', coalition: 'PH' },
    ],},{
    code: 'P027',
    name: 'Tanah Merah',
    candidates: [
      { name: 'Ikmal Hisham Abdul Aziz', party: 'BERSATU', coalition: 'PN' },
      { name: 'Mohd Bakri Mustapha', party: 'UMNO', coalition: 'BN' },
      { name: 'Nik Sephia Nik Yusoff', party: 'Independent' },
      { name: 'Nasir Abdullah', party: 'PUTRA', coalition: 'GTA' },
      { name: 'Mohd Suparadi Md Noor', party: 'PKR', coalition: 'PH' },
    ],},{
    code: 'P028',
    name: 'Pasir Putih',
    candidates: [
      { name: 'Nik Muhammad Zawawi Salleh', party: 'PAS', coalition: 'PN' },
      { name: 'Zawawi Othman', party: 'UMNO', coalition: 'BN' },
      { name: 'Wan Marzudi Wan Umar', party: 'PEJUANG', coalition: 'GTA' },
      { name: 'Muhammad Husain', party: 'AMANAH', coalition: 'PH' },
    ],},{
    code: 'P029',
    name: 'Machang',
    candidates: [
      { name: 'Ahmad Jazlan Yaakub', party: 'UMNO', coalition: 'BN' },
      { name: 'Wan Ahmad Fayhsal Wan Ahmad Kamal', party: 'BERSATU', coalition: 'PN' },
      { name: 'Mohammad Seman', party: 'PUTRA', coalition: 'GTA' },
      { name: 'Rosli Allani Abdull Kadir', party: 'PKR', coalition: 'PH' },
    ],},{
    code: 'P030',
    name: 'Jeli',
    candidates: [
      { name: 'Zahari Kechik', party: 'BERSATU', coalition: 'PN' },
      { name: 'Norwahida Patuan', party: 'UMNO', coalition: 'BN' },
      { name: 'Mohammad Daud', party: 'PUTRA', coalition: 'GTA' },
      { name: 'Md Radzi Wahab', party: 'AMANAH', coalition: 'PH' },
    ],},{
    code: 'P031',
    name: 'Kuala Krai',
    candidates: [
      { name: 'Abdul Latiff Abdul Rahman', party: 'PAS', coalition: 'PN' },
      { name: 'Mohamed Zulkepli Omar', party: 'UMNO', coalition: 'BN' },
      { name: 'Norashikin Che Umar', party: 'PEJUANG', coalition: 'GTA' },
      { name: 'Mohd Hisyamuddin Ghazali', party: 'AMANAH', coalition: 'PH' },
    ],},{
    code: 'P032',
    name: 'Gua Musang',
    candidates: [
      { name: 'Tengku Razaleigh Tengku Mohd. Hamzah', party: 'UMNO', coalition: 'BN' },
      { name: 'Mohd Azizi Abu Naim', party: 'PAS', coalition: 'PN' },
      { name: 'Samsu Adabi Mamat', party: 'PEJUANG', coalition: 'GTA' },
      { name: 'Asharun Uji', party: 'PKR', coalition: 'PH' },
    ],},{
    code: 'P033',
    name: 'Besut',
    candidates: [
      { name: 'Nawi Mohamad', party: 'UMNO', coalition: 'BN' },
      { name: 'Abdul Rahman@Abdul Aziz Abas', party: 'AMANAH', coalition: 'PH' },
      { name: 'Wan Nazari Wan Jusoh', party: 'PEJUANG', coalition: 'GTA' },
      { name: 'Che Mohamad Zulkifly Jusoh', party: 'PAS', coalition: 'PN' },
    ],},{
    code: 'P034',
    name: 'Setiu',
    candidates: [
      { name: 'Shaharizukirnain Abdul Kadir', party: 'PAS', coalition: 'PN' },
      { name: 'Mohamad Ngah', party: 'PKR', coalition: 'PH' },
      { name: 'Wan Adnan Wan Ali', party: 'PEJUANG', coalition: 'GTA' },
      { name: 'Abdul Rahman Mohd Yasin', party: 'UMNO', coalition: 'BN' },
    ],},{
    code: 'P035',
    name: 'Kuala Nerus',
    candidates: [
      { name: 'Mohd. Khairuddin Aman Razali', party: 'Independent' },
      { name: 'Alias Razak', party: 'PAS', coalition: 'PN' },
      { name: 'Suhaimi Hashim', party: 'AMANAH', coalition: 'PH' },
      { name: 'Azahar Wahid', party: 'PUTRA', coalition: 'GTA' },
      { name: 'Mohd Khairuddin Aman Razali', party: 'UMNO', coalition: 'BN' },
    ],},{
    code: 'P036',
    name: 'Kuala Terengganu',
    candidates: [
      { name: 'Ahmad Amzad Mohamed Hashim', party: 'PAS', coalition: 'PN' },
      { name: 'Raja Kamarul Bahrin Shah', party: 'AMANAH', coalition: 'PH' },
      { name: 'Mohamad Abu Bakar Muda', party: 'PUTRA', coalition: 'GTA' },
      { name: 'Mohd Zubir Embong', party: 'UMNO', coalition: 'BN' },
    ],},{
    code: 'P037',
    name: 'Marang',
    candidates: [
      { name: 'Abdul Hadi Awang', party: 'PAS', coalition: 'PN' },
      { name: 'Jasmira Othman', party: 'UMNO', coalition: 'BN' },
      { name: 'Zarawi Sulung', party: 'PUTRA', coalition: 'GTA' },
      { name: 'Azhar Abdul Shukur', party: 'AMANAH', coalition: 'PH' },
    ],},{
    code: 'P038',
    name: 'Hulu Terengganu',
    candidates: [
      { name: 'Rosol Wahid', party: 'BERSATU', coalition: 'PN' },
      { name: 'Alias Ismail', party: 'PKR', coalition: 'PH' },
      { name: 'Mohd Qadri Abdullah', party: 'PUTRA', coalition: 'GTA' },
      { name: 'Rozi Mamat', party: 'UMNO', coalition: 'BN' },
    ],},{
    code: 'P039',
    name: 'Dungun',
    candidates: [
      { name: 'Wan Hassan Mohd. Ramli', party: 'PAS', coalition: 'PN' },
      { name: 'Mohd Johari Mohamad', party: 'PKR', coalition: 'PH' },
      { name: 'Nur Aishah Hassan', party: 'PEJUANG', coalition: 'GTA' },
      { name: 'Nurhisam Johari', party: 'UMNO', coalition: 'BN' },
    ],},{
    code: 'P040',
    name: 'Kemaman',
    candidates: [
      { name: 'Che Alias Hamid', party: 'PAS', coalition: 'PN' },
      { name: 'Hasuni Sudin', party: 'PKR', coalition: 'PH' },
      { name: 'Rosli Abd Ghani', party: 'PEJUANG', coalition: 'GTA' },
      { name: 'Ahmad Said', party: 'UMNO', coalition: 'BN' },
    ],},{
    code: 'P041',
    name: 'Kepala Batas',
    candidates: [
      { name: 'Reezal Merican Naina Merican', party: 'UMNO', coalition: 'BN' },
      { name: 'Siti Mastura Mohamad', party: 'PAS', coalition: 'PN' },
      { name: 'Hamidi Abu Hassan', party: 'BERJASA', coalition: 'GTA' },
      { name: 'Daniel Abdul Majid ', party: 'MUDA', coalition: 'PH' },
    ],},{
    code: 'P042',
    name: 'Tasek Gelugor',
    candidates: [
      { name: 'Wan Saifulruddin Wan Jan', party: 'BERSATU', coalition: 'PN' },
      { name: 'Mohd Akmal Azhar', party: 'WARISAN' },
      { name: 'Muhd Yusof Mohd Noor', party: 'UMNO', coalition: 'BN' },
      { name: 'Abdul Halim Sirjung', party: 'GB', coalition: 'GTA' },
      { name: 'Nik Abdul Razak Md Ridzuan', party: 'AMANAH', coalition: 'PH' },
    ],},{
    code: 'P043',
    name: 'Bagan',
    candidates: [
      { name: 'Lim Guan Eng', party: 'DAP', coalition: 'PH' },
      { name: 'Alan Oh Teik Choon', party: 'BERSATU', coalition: 'PN' },
      { name: 'Mohd Hafiz Mohd Abu', party: 'IMAN', coalition: 'GTA' },
      { name: 'Tan Chuan Hong', party: 'MCA', coalition: 'BN' },
    ],},{
    code: 'P044',
    name: 'Pematang Pauh',
    candidates: [
      { name: 'Nurul Izzah Anwar', party: 'PKR', coalition: 'PH' },
      { name: 'Muhammad Fawwaz Mat Jan', party: 'PAS', coalition: 'PN' },
      { name: 'Mohamad Nasir Osman', party: 'PUTRA', coalition: 'GTA' },
      { name: 'Mohd Zaidi Mohd Zaid', party: 'UMNO', coalition: 'BN' },
    ],},{
    code: 'P045',
    name: 'Bukit Mertajam',
    candidates: [
      { name: 'Steven Sim Chee Keong', party: 'DAP', coalition: 'PH' },
      { name: 'Steven Koh Tien Yew', party: 'PAS', coalition: 'PN' },
      { name: 'Tan Yang Pang', party: 'MCA', coalition: 'BN' },
    ],},{
    code: 'P046',
    name: 'Batu Kawan',
    candidates: [
      { name: 'Chow Kon Yeow', party: 'DAP', coalition: 'PH' },
      { name: 'Tan Lee Huat', party: 'MCA', coalition: 'BN' },
      { name: 'Wong Chia Zhen', party: 'GERAKAN', coalition: 'PN' },
      { name: 'Ong Chin Wen', party: 'WARISAN' },
      { name: 'Lee Ah Leong', party: 'PRM' },
    ],},{
    code: 'P047',
    name: 'Nibong Tebal',
    candidates: [
      { name: 'Mansor Othman', party: 'BERSATU', coalition: 'PN' },
      { name: 'Thanenthiran Ramankutty', party: 'MMSP', coalition: 'BN' },
      { name: 'Goh Kheng Huat', party: 'Independent' },
      { name: 'Fadhlina Sidek', party: 'PKR', coalition: 'PH' },
    ],},{
    code: 'P048',
    name: 'Bukit Bendera',
    candidates: [
      { name: 'Syerleena Abdul Rashid', party: 'DAP', coalition: 'PH' },
      { name: 'Richie Huan Xin Yun', party: 'PCM', coalition: 'BN' },
      { name: 'Hng Chee Wey', party: 'GERAKAN', coalition: 'PN' },
      { name: 'Razalif Mohd. Zain', party: 'Independent' },
      { name: 'Teh Yee Cheu', party: 'PRM' },
    ],},{
    code: 'P049',
    name: 'Tanjong',
    candidates: [
      { name: 'Lim Hui Ying', party: 'DAP', coalition: 'PH' },
      { name: 'H\'ng Khoon Leng', party: 'GERAKAN', coalition: 'PN' },
      { name: 'Tan Kim Nee', party: 'MCA', coalition: 'BN' },
    ],},{
    code: 'P050',
    name: 'Jelutong',
    candidates: [
      { name: 'Sanisvara Nethaji Rayer Rajaji', party: 'DAP', coalition: 'PH' },
      { name: 'Baljit Singh Jigiri Singh', party: 'GERAKAN', coalition: 'PN' },
      { name: 'Koh Swe Yong', party: 'PRM' },
      { name: 'Lim Huat Poh', party: 'WARISAN' },
      { name: 'Yacoob Noor', party: 'Independent' },
      { name: 'T Loganathan', party: 'IPF', coalition: 'BN' },
    ],},{
    code: 'P051',
    name: 'Bukit Gelugor',
    candidates: [
      { name: 'Ramkarpal Singh Karpal Singh', party: 'DAP', coalition: 'PH' },
      { name: 'Thinaganarabhan Padmanabhan', party: 'BERSATU', coalition: 'PN' },
      { name: 'Wong Chin Chong', party: 'MCA', coalition: 'BN' },
    ],},{
    code: 'P052',
    name: 'Bayan Baru',
    candidates: [
      { name: 'Sim Tze Tzin', party: 'PKR', coalition: 'PH' },
      { name: 'Saw Yee Fung', party: 'MCA', coalition: 'BN' },
      { name: 'Oh Tong Keong ', party: 'GERAKAN', coalition: 'PN' },
      { name: 'Jeff Ooi Chuan Aun', party: 'WARISAN' },
      { name: 'Kan Chee Yuen', party: 'Independent' },
      { name: 'Ravinder Singh', party: 'PRM' },
    ],},{
    code: 'P053',
    name: 'Balik Pulau',
    candidates: [
      { name: 'Muhammad Bakhtiar Wan Chik', party: 'PKR', coalition: 'PH' },
      { name: 'Muhammad Harris Idaham Abdul Rashid', party: 'BERSATU', coalition: 'PN' },
      { name: 'Fazli Mohammad', party: 'PEJUANG', coalition: 'GTA' },
      { name: 'Johnny (DSJ)', party: 'Independent' },
      { name: 'Sabaruddin Ahmad', party: 'Independent' },
      { name: 'Shah Headan Ayoob Hussain Shah', party: 'UMNO', coalition: 'BN' },
    ],},{
    code: 'P054',
    name: 'Gerik',
    candidates: [
      { name: 'Asyraf Wajdi Dusuki', party: 'UMNO', coalition: 'BN' },
      { name: 'Fathul Huzir Ayob', party: 'BERSATU', coalition: 'PN' },
      { name: 'Ahmad Tarmizi', party: 'DAP', coalition: 'PH' },
    ],},{
    code: 'P055',
    name: 'Lenggong',
    candidates: [
      { name: 'Shamsul Anuar Nasarah', party: 'UMNO', coalition: 'BN' },
      { name: 'Muhammad Rifaat Razman', party: 'PAS', coalition: 'PN' },
      { name: 'Jurey Latiff Mohd Rosli', party: 'PKR', coalition: 'PH' },
    ],},{
    code: 'P056',
    name: 'Larut',
    candidates: [
      { name: 'Hamzah Zainudin', party: 'BERSATU', coalition: 'PN' },
      { name: 'Mohd Shafiq Fhadly', party: 'UMNO', coalition: 'BN' },
      { name: 'Awzey Fazlan Sahidi', party: 'BERJASA', coalition: 'GTA' },
      { name: 'Zolkharnain Abidin', party: 'AMANAH', coalition: 'PH' },
    ],},{
    code: 'P057',
    name: 'Parit Buntar',
    candidates: [
      { name: 'Mujahid Yusuf', party: 'AMANAH', coalition: 'PH' },
      { name: 'Mohd Misbahul Munir Masduki', party: 'PAS', coalition: 'PN' },
      { name: 'Rohijas', party: 'PEJUANG', coalition: 'GTA' },
      { name: 'Imran Mohamad Yusof', party: 'UMNO', coalition: 'BN' },
    ],},{
    code: 'P058',
    name: 'Bagan Serai',
    candidates: [
      { name: 'Idris Ahmad', party: 'BERSATU', coalition: 'PN' },
      { name: 'Zul Helmi Ghazali', party: 'UMNO', coalition: 'BN' },
      { name: 'Ahmad Luqman Ahmad Yahaya', party: 'PEJUANG', coalition: 'GTA' },
      { name: 'Siti Aishah Shaik Ismail', party: 'PKR', coalition: 'PH' },
    ],},{
    code: 'P059',
    name: 'Bukit Gantang',
    candidates: [
      { name: 'Syed Abu Hussin Hafiz Syed Abdul Fasal', party: 'BERSATU', coalition: 'PN' },
      { name: 'Mohammad Sollehin Mohamad Tajie', party: 'UMNO', coalition: 'BN' },
      { name: 'Mohd Shukri Mohd Yusoff', party: 'PEJUANG', coalition: 'GTA' },
      { name: 'Fakhruldin Mohd Hashim', party: 'AMANAH', coalition: 'PH' },
    ],},{
    code: 'P060',
    name: 'Taiping',
    candidates: [
      { name: 'Wong Kah Woh', party: 'DAP', coalition: 'PH' },
      { name: 'See Tean Seng', party: 'GERAKAN', coalition: 'PN' },
      { name: 'Neow Choo Seong', party: 'MCA', coalition: 'BN' },
      { name: 'Rama', party: 'Independent' },
      { name: 'Mohganan Manikam', party: 'Independent' },
      { name: 'Leow Thye Yih ', party: 'Independent' },
    ],},{
    code: 'P061',
    name: 'Padang Rengas',
    candidates: [
      { name: 'Mohd Arrif Abdul Majid', party: 'UMNO', coalition: 'BN' },
      { name: 'Azahari Hasan', party: 'BERSATU', coalition: 'PN' },
      { name: 'Mohd Kamil Mohd Munim', party: 'PKR', coalition: 'PH' },
    ],},{
    code: 'P062',
    name: 'Sungai Siput',
    candidates: [
      { name: 'Kesavan Subramaniam', party: 'PKR', coalition: 'PH' },
      { name: 'Irudianathan Gabriel', party: 'BERSATU', coalition: 'PN' },
      { name: 'Ahmad Fauzi Mohd Jaafar', party: 'PEJUANG', coalition: 'GTA' },
      { name: 'Rajah Narasaim', party: 'Independent' },
      { name: 'R Indrani', party: 'Independent' },
      { name: 'Baharudin Kamarudin', party: 'Independent' },
      { name: 'S.Vigneswaran Sanasee', party: 'MIC', coalition: 'BN' },
    ],},{
    code: 'P063',
    name: 'Tambun',
    candidates: [
      { name: 'Ahmad Faizal Azumu', party: 'BERSATU', coalition: 'PN' },
      { name: 'Aminuddin MD Hanafiah', party: 'UMNO', coalition: 'BN' },
      { name: 'Abdul Rahim Tahir', party: 'PEJUANG', coalition: 'GTA' },
      { name: 'Anwar Ibrahim', party: 'PKR', coalition: 'PH' },
    ],},{
    code: 'P064',
    name: 'Ipoh Timor',
    candidates: [
      { name: 'Howard Lee Chuan How', party: 'DAP', coalition: 'PH' },
      { name: 'Nor Afzainizam Salleh', party: 'BERSATU', coalition: 'PN' },
      { name: 'Ng Kai Cheong', party: 'MCA', coalition: 'BN' },
    ],},{
    code: 'P065',
    name: 'Ipoh Barat',
    candidates: [
      { name: 'Kulasegaran Murugeson', party: 'DAP', coalition: 'PH' },
      { name: 'Chek Kwong Weng', party: 'GERAKAN', coalition: 'PN' },
      { name: 'M Kayveas', party: 'Independent' },
      { name: 'Low Guo Nan', party: 'MCA', coalition: 'BN' },
    ],},{
    code: 'P066',
    name: 'Batu Gajah',
    candidates: [
      { name: 'Sivakumar Varatharaju Naidu', party: 'DAP', coalition: 'PH' },
      { name: 'Woo Cheong Yuen', party: 'GERAKAN', coalition: 'PN' },
      { name: 'Teoh Chin Cheong', party: 'MCA', coalition: 'BN' },
    ],},{
    code: 'P067',
    name: 'Kuala Kangsar',
    candidates: [
      { name: 'Maslin Sham Razman', party: 'UMNO', coalition: 'BN' },
      { name: 'Iskandar Dzulkarnain Abdul Khalid', party: 'BERSATU', coalition: 'PN' },
      { name: 'Yusmalia Mohamad Yusof', party: 'PEJUANG', coalition: 'GTA' },
      { name: 'Ahmad Termizi Ramli', party: 'AMANAH', coalition: 'PH' },
    ],},{
    code: 'P068',
    name: 'Beruas',
    candidates: [
      { name: 'James Ngeh Koo Ham', party: 'DAP', coalition: 'PH' },
      { name: 'Ong Kean Sing', party: 'GERAKAN', coalition: 'PN' },
      { name: 'Ding Siew Chee', party: 'MCA', coalition: 'BN' },
    ],},{
    code: 'P069',
    name: 'Parit',
    candidates: [
      { name: 'Mohd. Nizar Zakaria', party: 'UMNO', coalition: 'BN' },
      { name: 'Muhammad Ismi Mat Taib', party: 'PAS', coalition: 'PN' },
      { name: 'Faizol Fadzli Mohamed', party: 'PEJUANG', coalition: 'GTA' },
      { name: 'Nurthaqaffah Nordin', party: 'AMANAH', coalition: 'PH' },
    ],},{
    code: 'P070',
    name: 'Kampar',
    candidates: [
      { name: 'Chong Zhemin', party: 'DAP', coalition: 'PH' },
      { name: 'Janice Wong Oi Foon', party: 'GERAKAN', coalition: 'PN' },
      { name: 'Leong Cheuk Lung', party: 'WARISAN' },
      { name: 'Lee Chee Leong', party: 'MCA', coalition: 'BN' },
    ],},{
    code: 'P071',
    name: 'Gopeng',
    candidates: [
      { name: 'Tan Kar Hing', party: 'PKR', coalition: 'PH' },
      { name: 'Cally Ting', party: 'MCA', coalition: 'BN' },
      { name: 'Balachandaral Gopal', party: 'WARISAN' },
      { name: 'Muhammad Farhan Abdul Rahim', party: 'BERSATU', coalition: 'PN' },
    ],},{
    code: 'P072',
    name: 'Tapah',
    candidates: [
      { name: 'Saravanan Murugan', party: 'MIC', coalition: 'BN' },
      { name: 'Muhammad Yadzan Mohamad', party: 'BERSATU', coalition: 'PN' },
      { name: 'Saraswathy Kandasami', party: 'PKR', coalition: 'PH' },
      { name: 'Mohd Akhbar Sharif Yasin', party: 'WARISAN' },
      { name: 'M. Kathiravan', party: 'Independent' },
      { name: 'Mior Nor Haidir Suhaimi', party: 'PEJUANG', coalition: 'GTA' },
    ],},{
    code: 'P073',
    name: 'Pasir Salak',
    candidates: [
      { name: 'Khairul Azwan Harun', party: 'UMNO', coalition: 'BN' },
      { name: 'Jamaluddin Yahya', party: 'PAS', coalition: 'PN' },
      { name: 'Zairol Hizam Zakaria', party: 'PUTRA', coalition: 'GTA' },
      { name: 'Nik Omar Nik Abdul Aziz', party: 'PKR', coalition: 'PH' },
    ],},{
    code: 'P074',
    name: 'Lumut',
    candidates: [
      { name: 'Mohd. Hatta Md. Ramli', party: 'AMANAH', coalition: 'PH' },
      { name: 'Isnin Ismail @ Ibrahim Khan', party: 'WARISAN' },
      { name: 'Nordin Ahmad Ismail', party: 'BERSATU', coalition: 'PN' },
      { name: 'Mazlan Abdul Ghani', party: 'PEJUANG', coalition: 'GTA' },
      { name: 'Zambry Abdul Kadir', party: 'UMNO', coalition: 'BN' },
    ],},{
    code: 'P075',
    name: 'Bagan Datuk',
    candidates: [
      { name: 'Ahmad Zahid Hamidi', party: 'UMNO', coalition: 'BN' },
      { name: 'Shamsul Iskandar Md Akin', party: 'PKR', coalition: 'PH' },
      { name: 'Nik Muhammad Faiz Na\'aman', party: 'BERSATU', coalition: 'PN' },
      { name: 'Tawfik Tun Dr Ismail', party: 'Independent' },
    ],},{
    code: 'P076',
    name: 'Teluk Intan',
    candidates: [
      { name: 'David Nga Kor Ming', party: 'DAP', coalition: 'PH' },
      { name: 'Zainol Fadzi', party: 'BERSATU', coalition: 'PN' },
      { name: 'Amir Khusyairi Mohamad Tanusi', party: 'PEJUANG', coalition: 'GTA' },
      { name: 'T. Murugiah', party: 'MIC', coalition: 'BN' },
    ],},{
    code: 'P077',
    name: 'Tanjong Malim',
    candidates: [
      { name: 'Chang Lih Kang', party: 'PKR', coalition: 'PH' },
      { name: 'Nolee Ashilin Mohammed Radzi', party: 'BERSATU', coalition: 'PN' },
      { name: 'Amir Hamzah Abdul Razak', party: 'IMAN', coalition: 'GTA' },
      { name: 'Jamaluddin Mohd. Radzi', party: 'Independent' },
      { name: 'Izzat Johari', party: 'Independent' },
      { name: 'Mah Hang Soon', party: 'MCA', coalition: 'BN' },
    ],},{
    code: 'P078',
    name: 'Cameron Highlands',
    candidates: [
      { name: 'Ramli Mohd. Nor', party: 'UMNO', coalition: 'BN' },
      { name: 'Abdul Rasid Mohamed Ali', party: 'BERSATU', coalition: 'PN' },
      { name: 'Chiong Yoke Kong', party: 'DAP', coalition: 'PH' },
    ],},{
    code: 'P079',
    name: 'Lipis',
    candidates: [
      { name: 'Abdul Rahman Mohamad', party: 'UMNO', coalition: 'BN' },
      { name: 'Mohamad Shahrum Osman', party: 'BERSATU', coalition: 'PN' },
      { name: 'Aishaton Abu Bakar', party: 'PEJUANG', coalition: 'GTA' },
      { name: 'Tengku Zulpuri Shah Raja Puji', party: 'DAP', coalition: 'PH' },
    ],},{
    code: 'P080',
    name: 'Raub',
    candidates: [
      { name: 'Chow Yu Hui', party: 'DAP', coalition: 'PH' },
      { name: 'Mohd Fakrunizam Ibrahim', party: 'BERSATU', coalition: 'PN' },
      { name: 'Norkhairul Anuar Mohamed Nor', party: 'PEJUANG', coalition: 'GTA' },
      { name: 'Chong Sin Woon', party: 'MCA', coalition: 'BN' },
    ],},{
    code: 'P081',
    name: 'Jerantut',
    candidates: [
      { name: 'Mohd Zukarmi Abu Bakar', party: 'UMNO', coalition: 'BN' },
      { name: 'Khairil Nizam Khirudin', party: 'PAS', coalition: 'PN' },
      { name: 'Hassan Basri Awang Mat Dahan', party: 'PKR', coalition: 'PH' },
    ],},{
    code: 'P082',
    name: 'Indera Mahkota',
    candidates: [
      { name: 'Saifuddin Abdullah', party: 'BERSATU', coalition: 'PN' },
      { name: 'Quek Tai Seong', party: 'MCA', coalition: 'BN' },
      { name: 'Mohamad Nor Sundari', party: 'BERJASA', coalition: 'GTA' },
      { name: 'Zuraidi Ismail', party: 'PKR', coalition: 'PH' },
    ],},{
    code: 'P083',
    name: 'Kuantan',
    candidates: [
      { name: 'Fuziah Salleh', party: 'PKR', coalition: 'PH' },
      { name: 'Wan Razali Wan Nor', party: 'PAS', coalition: 'PN' },
      { name: 'Anuar Tajuddin', party: 'PEJUANG', coalition: 'GTA' },
      { name: 'Abu Hamid Mohd Nazahar', party: 'UMNO', coalition: 'BN' },
    ],},{
    code: 'P084',
    name: 'Paya Besar',
    candidates: [
      { name: 'Mohd. Shahar Abdullah', party: 'UMNO', coalition: 'BN' },
      { name: 'Aireroshairi Roslan', party: 'PAS', coalition: 'PN' },
      { name: 'Rosminahar Mohd Amin', party: 'PEJUANG', coalition: 'GTA' },
      { name: 'Ahmad Azam Mohamad Salleh', party: 'AMANAH', coalition: 'PH' },
    ],},{
    code: 'P085',
    name: 'Pekan',
    candidates: [
      { name: 'Sh Mohmed Puzi Sh Ali', party: 'UMNO', coalition: 'BN' },
      { name: 'Mohd Naim Zainal Abidin', party: 'PKR', coalition: 'PH' },
      { name: 'Mohd Fadhil Noor Abdul Karim', party: 'PAS', coalition: 'PN' },
      { name: 'Mohammad Radhi Abdul Razak', party: 'PEJUANG', coalition: 'GTA' },
      { name: 'Tengku Zainul Hisham Tengku Hussin', party: 'Independent' },
    ],},{
    code: 'P086',
    name: 'Maran',
    candidates: [
      { name: 'Shahaniza Shamsuddin', party: 'UMNO', coalition: 'BN' },
      { name: 'Ismail Abdul Muttalib', party: 'PAS', coalition: 'PN' },
      { name: 'Muhamad Hafiz Al-Hafiz', party: 'Independent' },
      { name: 'Ahmad Shuhor Awang', party: 'AMANAH', coalition: 'PH' },
    ],},{
    code: 'P087',
    name: 'Kuala Krau',
    candidates: [
      { name: 'Ismail Mohamed Said', party: 'UMNO', coalition: 'BN' },
      { name: 'Kamal Ashaari', party: 'PAS', coalition: 'PN' },
      { name: 'Shahruddin Mohamed Salleh', party: 'PEJUANG', coalition: 'GTA' },
      { name: 'Juhari Osman', party: 'AMANAH', coalition: 'PH' },
    ],},{
    code: 'P088',
    name: 'Temerloh',
    candidates: [
      { name: 'Mohd Hasbie Muda', party: 'AMANAH', coalition: 'PH' },
      { name: 'Salamiah Mohd Nor', party: 'PAS', coalition: 'PN' },
      { name: 'Aminudin Yahya', party: 'GB', coalition: 'GTA' },
      { name: 'Mohd Sharkar Shamsudin', party: 'UMNO', coalition: 'BN' },
    ],},{
    code: 'P089',
    name: 'Bentong',
    candidates: [
      { name: 'Young Syefura Othman', party: 'DAP', coalition: 'PH' },
      { name: 'Liow Tiong Lai', party: 'MCA', coalition: 'BN' },
      { name: 'Roslan Hassan', party: 'BERSATU', coalition: 'PN' },
      { name: 'Mohd Khalil Abdul Hamid', party: 'Independent' },
      { name: 'Wong Tack', party: 'Independent' },
    ],},{
    code: 'P090',
    name: 'Bera',
    candidates: [
      { name: 'Ismail Sabri Yaakob', party: 'UMNO', coalition: 'BN' },
      { name: 'Asmawi Harun', party: 'BERSATU', coalition: 'PN' },
      { name: 'Abas Awang', party: 'PKR', coalition: 'PH' },
    ],},{
    code: 'P091',
    name: 'Rompin',
    candidates: [
      { name: 'Hasan Arifin', party: 'UMNO', coalition: 'BN' },
      { name: 'Abdul Khalib Abdullah', party: 'BERSATU', coalition: 'PN' },
      { name: 'Hamizi Hussain', party: 'Independent' },
      { name: 'Erman Shah Jaios', party: 'PKR', coalition: 'PH' },
    ],},{
    code: 'P092',
    name: 'Sabak Bernam',
    candidates: [
      { name: 'Kalam Salan', party: 'BERSATU', coalition: 'PN' },
      { name: 'Shamsul Ma\'arif Ismail', party: 'AMANAH', coalition: 'PH' },
      { name: 'Idris Mat Yusof', party: 'GB', coalition: 'GTA' },
      { name: 'Abdul Rahman Bakri', party: 'UMNO', coalition: 'BN' },
    ],},{
    code: 'P093',
    name: 'Sungai Besar',
    candidates: [
      { name: 'Muslimin Yahaya', party: 'BERSATU', coalition: 'PN' },
      { name: 'Saipolyazan Mat Yusop', party: 'PKR', coalition: 'PH' },
      { name: 'Asmawar Samat @ Samad', party: 'PUTRA', coalition: 'GTA' },
      { name: 'Jamal Mohd Yunos', party: 'UMNO', coalition: 'BN' },
    ],},{
    code: 'P094',
    name: 'Hulu Selangor',
    candidates: [
      { name: 'Sathia Prakash Nadarajan', party: 'PKR', coalition: 'PH' },
      { name: 'Mohan Thangarasu', party: 'MIC', coalition: 'BN' },
      { name: 'Mohd Hasnizan Harun', party: 'PAS', coalition: 'PN' },
      { name: 'Haniza Talha', party: 'PBM' },
      { name: 'Azlinda Baroni', party: 'Independent' },
      { name: 'Harumaini Omar ', party: 'PEJUANG', coalition: 'GTA' },
    ],},{
    code: 'P095',
    name: 'Tanjong Karang',
    candidates: [
      { name: 'Habibah Mohd Yusof ', party: 'UMNO', coalition: 'BN' },
      { name: 'Zulkafperi Hanapi', party: 'BERSATU', coalition: 'PN' },
      { name: 'Azlan Sani Zawawi (Lando Brotherhood)', party: 'GB', coalition: 'GTA' },
      { name: 'Mohd Rosni', party: 'Independent' },
      { name: 'Siti Rahayu Baharin', party: 'MUDA', coalition: 'PH' },
    ],},{
    code: 'P096',
    name: 'Kuala Selangor',
    candidates: [
      { name: 'Dzulkefly Ahmad', party: 'AMANAH', coalition: 'PH' },
      { name: 'Tengku Zafrul Aziz', party: 'UMNO', coalition: 'BN' },
      { name: 'Mohd Noor Mohd Sahar', party: 'PAS', coalition: 'PN' },
      { name: 'Mohd Shaid Rosli', party: 'PEJUANG', coalition: 'GTA' },
    ],},{
    code: 'P097',
    name: 'Selayang',
    candidates: [
      { name: 'William Leong Jee Keen', party: 'PKR', coalition: 'PH' },
      { name: 'Chan Wun Hoong', party: 'MCA', coalition: 'BN' },
      { name: 'Abdul Rashid Asari', party: 'BERSATU', coalition: 'PN' },
      { name: 'Salleh Amiruddin', party: 'PEJUANG', coalition: 'GTA' },
      { name: 'Muhammad Zaki Omar', party: 'Independent' },
    ],},{
    code: 'P098',
    name: 'Gombak',
    candidates: [
      { name: 'Mohamed Azmin Ali', party: 'BERSATU', coalition: 'PN' },
      { name: 'Megat Zulkarnain Omardin', party: 'UMNO', coalition: 'BN' },
      { name: 'Aziz Jamaludin Mohd Tahir', party: 'PUTRA', coalition: 'GTA' },
      { name: 'Zulkifli Ahmad', party: 'Independent' },
      { name: 'Amirudin Shari', party: 'PKR', coalition: 'PH' },
    ],},{
    code: 'P099',
    name: 'Ampang',
    candidates: [
      { name: 'Zuraida Kamaruddin', party: 'PBM' },
      { name: 'Ivone Low Yi Wen', party: 'MCA', coalition: 'BN' },
      { name: 'Sasha Lyna Abdul Latif', party: 'BERSATU', coalition: 'PN' },
      { name: 'Bryan Lai Wai Chong', party: 'WARISAN' },
      { name: 'Nurul Ashikin Mabahwi', party: 'PEJUANG', coalition: 'GTA' },
      { name: 'Rodziah Ismail', party: 'PKR', coalition: 'PH' },
      { name: 'Tan Hua Meng', party: 'Independent' },
      { name: 'Muhammad Shafiq Izwan Mohd Yunos', party: 'Independent' },
      { name: 'M Raveendran', party: 'Independent' },
    ],},{
    code: 'P100',
    name: 'Pandan',
    candidates: [
      { name: 'Rafizi Ramli', party: 'PKR', coalition: 'PH' },
      { name: 'Ong Tee Keat', party: 'WARISAN' },
      { name: 'Muhammad Farique Zubir Albakri', party: 'PAS', coalition: 'PN' },
      { name: 'Nadia Hanafiah', party: 'GB', coalition: 'GTA' },
      { name: 'Leong Kok Wee', party: 'MCA', coalition: 'BN' },
    ],},{
    code: 'P101',
    name: 'Hulu Langat',
    candidates: [
      { name: 'Mohd Sany Hamzan', party: 'AMANAH', coalition: 'PH' },
      { name: 'Johan Abd Aziz', party: 'UMNO', coalition: 'BN' },
      { name: 'Mohd Radzi Abd Latif', party: 'BERSATU', coalition: 'PN' },
      { name: 'Markiman Kobiran', party: 'PEJUANG', coalition: 'GTA' },
      { name: 'Mohamed Mustafa', party: 'Independent' },
      { name: 'Abdul Rahman Jaafar', party: 'WARISAN' },
    ],},{
    code: 'P102',
    name: 'Bangi',
    candidates: [
      { name: 'Syahredzan Johan', party: 'DAP', coalition: 'PH' },
      { name: 'Hoh Hee Lee', party: 'MCA', coalition: 'BN' },
      { name: 'Annuar Salleh', party: 'BERJASA', coalition: 'GTA' },
      { name: 'Muhammad Nazrul Hakim Nazir', party: 'PAS', coalition: 'PN' },
      { name: 'Chee Chee Meng', party: 'PRM' },
      { name: 'Jamal Hisham Hashim', party: 'Independent' },
      { name: 'Mohd Fauzi Yusof', party: 'Independent' },
      { name: 'Suthan Mookaiah', party: 'Independent' },
    ],},{
    code: 'P103',
    name: 'Puchong',
    candidates: [
      { name: 'Yeo Bee Yin', party: 'DAP', coalition: 'PH' },
      { name: 'Syed Ibrahim Syed Abdul Kadir', party: 'KIMMA', coalition: 'BN' },
      { name: 'Kuan Chee Heng (Uncle Kentang)', party: 'Independent' },
      { name: 'Jimmy Chew Jyh Gang', party: 'GERAKAN', coalition: 'PN' },
    ],},{
    code: 'P104',
    name: 'Subang',
    candidates: [
      { name: 'Wong Chen', party: 'PKR', coalition: 'PH' },
      { name: 'Kow Cheong Wei ', party: 'MCA', coalition: 'BN' },
      { name: 'Alex Ang Hiang Ni', party: 'GERAKAN', coalition: 'PN' },
    ],},{
    code: 'P105',
    name: 'Petaling Jaya',
    candidates: [
      { name: 'Lee Chean Chung', party: 'PKR', coalition: 'PH' },
      { name: 'Chew Hian Tat', party: 'MCA', coalition: 'BN' },
      { name: 'Theng Book', party: 'BERSATU', coalition: 'PN' },
      { name: 'Mazween Mokhtar', party: 'GB', coalition: 'GTA' },
      { name: 'Ezam Mohd Nor', party: 'PRM' },
      { name: 'KJ John', party: 'Independent' },
    ],},{
    code: 'P106',
    name: 'Damansara',
    candidates: [
      { name: 'Gobind Singh Deo', party: 'DAP', coalition: 'PH' },
      { name: 'Lim Si Ching', party: 'GERAKAN', coalition: 'PN' },
      { name: 'Tan Gim Tuan', party: 'MCA', coalition: 'BN' },
    ],},{
    code: 'P107',
    name: 'Sungai Buloh',
    candidates: [
      { name: 'Ramanan Ramakrishnan', party: 'PKR', coalition: 'PH' },
      { name: 'Khairy Jamaluddin', party: 'UMNO', coalition: 'BN' },
      { name: 'Mohd Akmal Mohd Yusoff', party: 'PEJUANG', coalition: 'GTA' },
      { name: 'Nur Haslinda Basri (Sifu Linda)', party: 'Independent' },
      { name: 'Syed Razak Alsagoff', party: 'Independent' },
      { name: 'Ahmad Zuhri Faisal', party: 'PRM' },
      { name: 'Mohd Ghazali Md Amin', party: 'PAS', coalition: 'PN' },
    ],},{
    code: 'P108',
    name: 'Shah Alam',
    candidates: [
      { name: 'Azli Yusof', party: 'AMANAH', coalition: 'PH' },
      { name: 'Hizatul Isham Abd Jalil', party: 'UMNO', coalition: 'BN' },
      { name: 'Muhammad Rafique Rashid Ali', party: 'PEJUANG', coalition: 'GTA' },
      { name: 'Afif Bahardin', party: 'BERSATU', coalition: 'PN' },
    ],},{
    code: 'P109',
    name: 'Kapar',
    candidates: [
      { name: 'Abdullah Sani Abdul Hamid', party: 'PKR', coalition: 'PH' },
      { name: 'Muhammad Noor Azman', party: 'UMNO', coalition: 'BN' },
      { name: 'Mohd Pathan Hussin', party: 'BERJASA', coalition: 'GTA' },
      { name: 'Rahim Awang ', party: 'WARISAN' },
      { name: 'Daroyah Alwi', party: 'PBM' },
      { name: 'VP Sevelinggam', party: 'Independent' },
      { name: 'Halimah Ali', party: 'PAS', coalition: 'PN' },
    ],},{
    code: 'P110',
    name: 'Klang',
    candidates: [
      { name: 'Ganabatirau Veraman', party: 'DAP', coalition: 'PH' },
      { name: 'Tee Hooi Ling', party: 'MCA', coalition: 'BN' },
      { name: 'Jaya Chandran Perumal', party: 'BERSATU', coalition: 'PN' },
      { name: 'Chandra Sivarajan', party: 'PRM' },
      { name: 'Deepak Jaikishan Jaikishan Rewachand', party: 'Independent' },
      { name: 'Hedrhin Ramli @ Awin', party: 'Independent' },
      { name: 'Loo Cheng Wee', party: 'WARISAN' },
    ],},{
    code: 'P111',
    name: 'Kota Raja',
    candidates: [
      { name: 'Mohamad Sabu', party: 'AMANAH', coalition: 'PH' },
      { name: 'Mohamed Diah Baharun', party: 'PAS', coalition: 'PN' },
      { name: 'Fahmi Bazlan Muda', party: 'BERJASA', coalition: 'GTA' },
      { name: 'Che Sara Afiqah Zainul Arif', party: 'PRM' },
      { name: 'Kumar Karananedi', party: 'Independent' },
      { name: 'P. Raveentharan Periasamy', party: 'Independent' },
      { name: 'Surendhar Selvaraju', party: 'Independent' },
      { name: 'Kajendra Doraisamy', party: 'MIC', coalition: 'BN' },
    ],},{
    code: 'P112',
    name: 'Kuala Langat',
    candidates: [
      { name: 'Mohana Muniandy Raman', party: 'MIC', coalition: 'BN' },
      { name: 'Manivannan Gobind', party: 'PKR', coalition: 'PH' },
      { name: 'Ridzuan Abdullah', party: 'GB', coalition: 'GTA' },
      { name: 'Gaveson Murugeson', party: 'PRM' },
      { name: 'Hajah Zanariah Jumhuri', party: 'Independent' },
      { name: 'Ahmad Yunus Hairi', party: 'PAS', coalition: 'PN' },
    ],},{
    code: 'P113',
    name: 'Sepang',
    candidates: [
      { name: 'Raj Munni@Aiman Athirah', party: 'AMANAH', coalition: 'PH' },
      { name: 'Anuar Basiran', party: 'UMNO', coalition: 'BN' },
      { name: 'Rina Mohd. Harun', party: 'BERSATU', coalition: 'PN' },
      { name: 'Nareswaran Rahmi', party: 'PRM' },
      { name: 'Mohd Daud Leong Abdullah', party: 'PUR' },
      { name: 'M. Muneswaran', party: 'Independent' },
      { name: 'Mohd Syahrul Amri Mat Sari', party: 'Independent' },
      { name: 'Che Asmah Ibrahim', party: 'PEJUANG', coalition: 'GTA' },
    ],},{
    code: 'P114',
    name: 'Kepong',
    candidates: [
      { name: 'Lim Lip Eng', party: 'DAP', coalition: 'PH' },
      { name: 'Yap Zheng Hoe', party: 'MCA', coalition: 'BN' },
      { name: 'Phang Jing Fatt', party: 'GERAKAN', coalition: 'PN' },
      { name: 'Young Shang Yi', party: 'WARISAN' },
      { name: 'Yee Poh Ping', party: 'Independent' },
    ],},{
    code: 'P115',
    name: 'Batu',
    candidates: [
      { name: 'Prabakaran Parameswaran', party: 'PKR', coalition: 'PH' },
      { name: 'A. Kohilan Pillay', party: 'MIC', coalition: 'BN' },
      { name: 'Azhar Yahya', party: 'PAS', coalition: 'PN' },
      { name: 'Wan Azliana Wan Adnan', party: 'PEJUANG', coalition: 'GTA' },
      { name: 'Naganathan Pillai', party: 'WARISAN' },
      { name: 'Zulkifli Abdul Fadlan', party: 'PRM' },
      { name: 'Chua Tian Chang', party: 'Independent' },
      { name: 'Siti Kasim', party: 'Independent' },
      { name: 'Too Cheng Huat (Too Gao Lan)', party: 'Independent' },
      { name: 'Nur Fathiah Syazwana', party: 'Independent' },
    ],},{
    code: 'P116',
    name: 'Wangsa Maju',
    candidates: [
      { name: 'Zahir Hasan', party: 'PKR', coalition: 'PH' },
      { name: 'Nuridah Mohd Salleh', party: 'PAS', coalition: 'PN' },
      { name: 'Raveentheran Suntheralingam', party: 'Independent' },
      { name: 'Wee Choo Keong', party: 'WARISAN' },
      { name: 'Norzaila Arifin', party: 'PUTRA', coalition: 'GTA' },
      { name: 'Mohd Shafei Abdullah', party: 'UMNO', coalition: 'BN' },
    ],},{
    code: 'P117',
    name: 'Segambut',
    candidates: [
      { name: 'Hannah Yeoh Tseow Suan', party: 'DAP', coalition: 'PH' },
      { name: 'Daniel Ling Sia Chin', party: 'MCA', coalition: 'BN' },
      { name: 'Prabagaran Vythillingam', party: 'GERAKAN', coalition: 'PN' },
    ],},{
    code: 'P118',
    name: 'Setiawangsa',
    candidates: [
      { name: 'Nik Nazmi Nik Ahmad', party: 'PKR', coalition: 'PH' },
      { name: 'Izudin Ishak', party: 'UMNO', coalition: 'BN' },
      { name: 'Bibi Sunita Sakandar Khan', party: 'PEJUANG', coalition: 'GTA' },
      { name: 'Stanley Lim Yen Tiong', party: 'Independent' },
      { name: 'Mior Rosli', party: 'Independent' },
      { name: 'Nurul Fadzilah Kamaluddin', party: 'BERSATU', coalition: 'PN' },
    ],},{
    code: 'P119',
    name: 'Titiwangsa',
    candidates: [
      { name: 'Rosni Adam', party: 'PAS', coalition: 'PN' },
      { name: 'Khalid Abdul Samad', party: 'AMANAH', coalition: 'PH' },
      { name: 'Johari Ghani Abdul Ghani', party: 'UMNO', coalition: 'BN' },
      { name: 'Khairuddin Abu Hassan', party: 'PEJUANG', coalition: 'GTA' },
    ],},{
    code: 'P120',
    name: 'Bukit Bintang',
    candidates: [
      { name: 'Fong Kui Lun', party: 'DAP', coalition: 'PH' },
      { name: 'Tan Teik Peng', party: 'MCA', coalition: 'BN' },
      { name: 'Chen Win Keong', party: 'BERSATU', coalition: 'PN' },
    ],},{
    code: 'P121',
    name: 'Lembah Pantai',
    candidates: [
      { name: 'Fahmi Fadzil', party: 'PKR', coalition: 'PH' },
      { name: 'Ramlan Shahean Askolani', party: 'UMNO', coalition: 'BN' },
      { name: 'Noor Asmah Mohd Razalli', party: 'PUTRA', coalition: 'GTA' },
      { name: 'Fauzi Abu Bakar', party: 'PAS', coalition: 'PN' },
    ],},{
    code: 'P122',
    name: 'Seputeh',
    candidates: [
      { name: 'Teresa Kok Suh Sim', party: 'DAP', coalition: 'PH' },
      { name: 'Lee Wai Hong', party: 'Independent' },
      { name: 'Alan Wong Yee Yeng', party: 'GERAKAN', coalition: 'PN' },
      { name: 'Lee Kah Hing', party: 'MCA', coalition: 'BN' },
      { name: 'Lian Choy Ling (Choy San Yeh)', party: 'Independent' },
    ],},{
    code: 'P123',
    name: 'Cheras',
    candidates: [
      { name: 'Tan Kok Wai', party: 'DAP', coalition: 'PH' },
      { name: 'Chong Yew Chuan', party: 'MCA', coalition: 'BN' },
      { name: 'Ruby Chin Yoke Kheng', party: 'BERSATU', coalition: 'PN' },
    ],},{
    code: 'P124',
    name: 'Bandar Tun Razak',
    candidates: [
      { name: 'Kamarudin Jaffar', party: 'BERSATU', coalition: 'PN' },
      { name: 'Chew Yin Keen', party: 'MCA', coalition: 'BN' },
      { name: 'Wan Azizah Wan Ismail', party: 'PKR', coalition: 'PH' },
    ],},{
    code: 'P125',
    name: 'Putrajaya',
    candidates: [
      { name: 'Tengku Adnan', party: 'UMNO', coalition: 'BN' },
      { name: 'Noraishah Mydin Abdul Aziz', party: 'PKR', coalition: 'PH' },
      { name: 'Rosli Ramli', party: 'BERJASA', coalition: 'GTA' },
      { name: 'Radzi Jidin', party: 'BERSATU', coalition: 'PN' },
      { name: 'Lim Fice Bee', party: 'Independent' },
      { name: 'Samsudin', party: 'Independent' },
    ],},{
    code: 'P126',
    name: 'Jelebu',
    candidates: [
      { name: 'Jalaluddin Alias', party: 'UMNO', coalition: 'BN' },
      { name: 'Zaharuddin Baba Samion', party: 'BERSATU', coalition: 'PN' },
      { name: 'Ahmad Fakri Abu Samah', party: 'PUTRA', coalition: 'GTA' },
      { name: 'Zulkefly Mohamad Omar', party: 'AMANAH', coalition: 'PH' },
    ],},{
    code: 'P127',
    name: 'Jempol',
    candidates: [
      { name: 'Shamsulkahar Mohd Deli ', party: 'UMNO', coalition: 'BN' },
      { name: 'Muhammad Noraffendy Mohd Salleh', party: 'BERSATU', coalition: 'PN' },
      { name: 'Mohd Khalid Mohd Yunus', party: 'PUTRA', coalition: 'GTA' },
      { name: 'Norwani Ahmat', party: 'AMANAH', coalition: 'PH' },
    ],},{
    code: 'P128',
    name: 'Seremban',
    candidates: [
      { name: 'Anthony Loke', party: 'DAP', coalition: 'PH' },
      { name: 'Felicia Wong Yin Ting', party: 'MCA', coalition: 'BN' },
      { name: 'Mohamad Jani Ismail', party: 'PEJUANG', coalition: 'GTA' },
      { name: 'Mohd Izzat Lesly', party: 'Independent' },
      { name: 'Mohd Fadli Che Me', party: 'PAS', coalition: 'PN' },
    ],},{
    code: 'P129',
    name: 'Kuala Pilah',
    candidates: [
      { name: 'Eddin Syazlee Shith', party: 'BERSATU', coalition: 'PN' },
      { name: 'Adnan Abu Hassan', party: 'UMNO', coalition: 'BN' },
      { name: 'Azman Idris', party: 'WARISAN' },
      { name: 'Kamarulzaman Kamdias', party: 'PUTRA', coalition: 'GTA' },
      { name: 'Nor Azman Mohamad', party: 'PKR', coalition: 'PH' },
    ],},{
    code: 'P130',
    name: 'Rasah',
    candidates: [
      { name: 'Cha Kee Chin', party: 'DAP', coalition: 'PH' },
      { name: 'David Choong Vee Hing', party: 'GERAKAN', coalition: 'PN' },
      { name: 'Ng Kian Nam ', party: 'MCA', coalition: 'BN' },
    ],},{
    code: 'P131',
    name: 'Rembau',
    candidates: [
      { name: 'Mohamad Hassan', party: 'UMNO', coalition: 'BN' },
      { name: 'Jufitri Joha', party: 'PKR', coalition: 'PH' },
      { name: 'Ramly Awalludin', party: 'PEJUANG', coalition: 'GTA' },
      { name: 'Tinagaram Subramaniam', party: 'PSM' },
      { name: 'Mohd Nazree Mohd Yunus', party: 'BERSATU', coalition: 'PN' },
    ],},{
    code: 'P132',
    name: 'Port Dickson',
    candidates: [
      { name: 'Aminuddin Harun', party: 'PKR', coalition: 'PH' },
      { name: 'P. Kamalanathan', party: 'MIC', coalition: 'BN' },
      { name: 'Rafiei Mustapha', party: 'PAS', coalition: 'PN' },
      { name: 'Ahmad Idham Ahmad Nazri', party: 'GB', coalition: 'GTA' },
      { name: 'Abdul Rani Kulup Abdullah', party: 'PBPN' },
    ],},{
    code: 'P133',
    name: 'Tampin',
    candidates: [
      { name: 'Muhammad Faiz Fadzil', party: 'AMANAH', coalition: 'PH' },
      { name: 'Mohd Isam Mohd Isa', party: 'UMNO', coalition: 'BN' },
      { name: 'Abdul Halim Abu Bakar', party: 'PAS', coalition: 'PN' },
      { name: 'Zamani Ibrahim', party: 'BERJASA', coalition: 'GTA' },
    ],},{
    code: 'P134',
    name: 'Masjid Tanah',
    candidates: [
      { name: 'Mas Ermieyati Samsudin', party: 'BERSATU', coalition: 'PN' },
      { name: 'Abdul Hakim Abdul Wahid', party: 'UMNO', coalition: 'BN' },
      { name: 'Handrawirawan Abu Bakar', party: 'PEJUANG', coalition: 'GTA' },
      { name: 'Mutalib Uthman', party: 'MUDA', coalition: 'PH' },
    ],},{
    code: 'P135',
    name: 'Alor Gajah',
    candidates: [
      { name: 'Mohd. Redzuan Md. Yusof', party: 'BERSATU', coalition: 'PN' },
      { name: 'Shahril Sufian Hamdan', party: 'UMNO', coalition: 'BN' },
      { name: 'Mohd Nazrin Abd Rahman', party: 'BERJASA', coalition: 'GTA' },
      { name: 'Adly Zahari', party: 'AMANAH', coalition: 'PH' },
    ],},{
    code: 'P136',
    name: 'Tangga Batu',
    candidates: [
      { name: 'Rusnah Aluai', party: 'PKR', coalition: 'PH' },
      { name: 'Lim Ban Hong', party: 'MCA', coalition: 'BN' },
      { name: 'Ghazali Abu', party: 'PUTRA', coalition: 'GTA' },
      { name: 'Mohammad Shahril Mahmood', party: 'Independent' },
      { name: 'Bakri Jamaluddin', party: 'PAS', coalition: 'PN' },
    ],},{
    code: 'P137',
    name: 'Hang Tuah Jaya',
    candidates: [
      { name: 'Adam Adli', party: 'PKR', coalition: 'PH' },
      { name: 'Mohd Ridhwan Mohd Ali', party: 'UMNO', coalition: 'BN' },
      { name: 'Sheikh Ikhzan Sheikh Salleh', party: 'PEJUANG', coalition: 'GTA' },
      { name: 'Mohd Azrudin Md Idris', party: 'BERSATU', coalition: 'PN' },
    ],},{
    code: 'P138',
    name: 'Kota Melaka',
    candidates: [
      { name: 'Khoo Poay Tiong', party: 'DAP', coalition: 'PH' },
      { name: 'Kon Qi Yao', party: 'MCA', coalition: 'BN' },
      { name: 'Norazlan', party: 'Independent' },
      { name: 'Suhaime Borhan', party: 'GERAKAN', coalition: 'PN' },
    ],},{
    code: 'P139',
    name: 'Jasin',
    candidates: [
      { name: 'Roslan Ahmad', party: 'UMNO', coalition: 'BN' },
      { name: 'Harun Mohamed', party: 'AMANAH', coalition: 'PH' },
      { name: 'Mohd Daud Nasir', party: 'PEJUANG', coalition: 'GTA' },
      { name: 'Zulkifli Ismail', party: 'PAS', coalition: 'PN' },
    ],},{
    code: 'P140',
    name: 'Segamat',
    candidates: [
      { name: 'Ramasamy Muthusamy', party: 'MIC', coalition: 'BN' },
      { name: 'Poobalan Ponnusamy', party: 'BERSATU', coalition: 'PN' },
      { name: 'Syed Hairoul Faizey Syed Ali', party: 'PUTRA', coalition: 'GTA' },
      { name: 'R.Yuneswaran', party: 'PKR', coalition: 'PH' },
    ],},{
    code: 'P141',
    name: 'Sekijang',
    candidates: [
      { name: 'Zaliha Mustafa', party: 'PKR', coalition: 'PH' },
      { name: 'Mohd Zohar Ahmad', party: 'WARISAN' },
      { name: 'Uzzair Ismail', party: 'BERSATU', coalition: 'PN' },
      { name: 'Mohd Saiful Faizal Abd Halim', party: 'PUTRA', coalition: 'GTA' },
      { name: 'Md Salleheen Mohamad', party: 'UMNO', coalition: 'BN' },
    ],},{
    code: 'P142',
    name: 'Labis',
    candidates: [
      { name: 'Pang Hok Liong', party: 'DAP', coalition: 'PH' },
      { name: 'Alvin Chang Teck Kiam', party: 'BERSATU', coalition: 'PN' },
      { name: 'Chua Tee Yong', party: 'MCA', coalition: 'BN' },
    ],},{
    code: 'P143',
    name: 'Pagoh',
    candidates: [
      { name: 'Muhyiddin Mohd. Yassin', party: 'BERSATU', coalition: 'PN' },
      { name: 'Razali Ibrahim', party: 'UMNO', coalition: 'BN' },
      { name: 'Iskandar Shah Abdul Rahman', party: 'PKR', coalition: 'PH' },
    ],},{
    code: 'P144',
    name: 'Ledang',
    candidates: [
      { name: 'Syed Ibrahim Syed Noh', party: 'PKR', coalition: 'PH' },
      { name: 'Zaidi Abd Majid', party: 'BERSATU', coalition: 'PN' },
      { name: 'Rafidah Ridwan', party: 'PEJUANG', coalition: 'GTA' },
      { name: 'Yunus Mustakim', party: 'Independent' },
      { name: 'Zainal Bahrom A Kadir ', party: 'Independent' },
      { name: 'Hamim Samuri', party: 'UMNO', coalition: 'BN' },
    ],},{
    code: 'P145',
    name: 'Bakri',
    candidates: [
      { name: 'Tan Hong Pin', party: 'DAP', coalition: 'PH' },
      { name: 'Chelvaraan R. Suppiah', party: 'BERSATU', coalition: 'PN' },
      { name: 'Haron Jaffar', party: 'Independent' },
      { name: 'Lee Ching Yong', party: 'MCA', coalition: 'BN' },
    ],},{
    code: 'P146',
    name: 'Muar',
    candidates: [
      { name: 'Syed Saddiq', party: 'MUDA', coalition: 'PH' },
      { name: 'Abdullah Husin', party: 'PAS', coalition: 'PN' },
      { name: 'Mohd Helmy Abd Latif', party: 'UMNO', coalition: 'BN' },
    ],},{
    code: 'P147',
    name: 'Parit Silong',
    candidates: [
      { name: 'Noraini Ahmad', party: 'UMNO', coalition: 'BN' },
      { name: 'Abdul Karim Deraman', party: 'PAS', coalition: 'PN' },
      { name: 'Mohd Faizal Dolah', party: 'AMANAH', coalition: 'PH' },
    ],},{
    code: 'P148',
    name: 'Ayer Hitam',
    candidates: [
      { name: 'Wee Ka Siong', party: 'MCA', coalition: 'BN' },
      { name: 'Syafiq Aziz', party: 'BERSATU', coalition: 'PN' },
      { name: 'Sheikh Omar Ali', party: 'DAP', coalition: 'PH' },
    ],},{
    code: 'P149',
    name: 'Sri Gading',
    candidates: [
      { name: 'Mahdzir Ibrahim', party: 'PEJUANG', coalition: 'GTA' },
      { name: 'Zanariyah Abd Hamid', party: 'PAS', coalition: 'PN' },
      { name: 'Mohd Lassim Burhan', party: 'UMNO', coalition: 'BN' },
      { name: 'Aminolhuda Hassan', party: 'AMANAH', coalition: 'PH' },
    ],},{
    code: 'P150',
    name: 'Batu Pahat',
    candidates: [
      { name: 'Mohd. Rashid Hasnon', party: 'BERSATU', coalition: 'PN' },
      { name: 'Ishak @ Mohd Farid Siraj', party: 'UMNO', coalition: 'BN' },
      { name: 'Nizam Bashir Abdul Kariem Bashier', party: 'PEJUANG', coalition: 'GTA' },
      { name: 'Zahari Osman', party: 'PRM' },
      { name: 'Onn Abu Bakar', party: 'PKR', coalition: 'PH' },
    ],},{
    code: 'P151',
    name: 'Simpang Renggam',
    candidates: [
      { name: 'Maszlee Malik', party: 'PKR', coalition: 'PH' },
      { name: 'Mohd Fazrul Kamat', party: 'BERSATU', coalition: 'PN' },
      { name: 'Kamal Kusmin', party: 'PUTRA', coalition: 'GTA' },
      { name: 'Hasni Mohammad', party: 'UMNO', coalition: 'BN' },
    ],},{
    code: 'P152',
    name: 'Kluang',
    candidates: [
      { name: 'Wong Shu Qi', party: 'DAP', coalition: 'PH' },
      { name: 'Dzulkarnain Alias', party: 'BERSATU', coalition: 'PN' },
      { name: 'Gan Ping Sieu', party: 'MCA', coalition: 'BN' },
      { name: 'Ramendran Ulaganathan', party: 'Independent' },
    ],},{
    code: 'P153',
    name: 'Sembrong',
    candidates: [
      { name: 'Hishammuddin Hussein', party: 'UMNO', coalition: 'BN' },
      { name: 'Aziz Ismail', party: 'BERSATU', coalition: 'PN' },
      { name: 'Hasni Abas', party: 'PKR', coalition: 'PH' },
    ],},{
    code: 'P154',
    name: 'Mersing',
    candidates: [
      { name: 'Muhammad Islahuddin Abas', party: 'BERSATU', coalition: 'PN' },
      { name: 'Abd Latif Bandi', party: 'UMNO', coalition: 'BN' },
      { name: 'Ismail Don', party: 'Independent' },
      { name: 'Nurfatimah Ibrahim', party: 'PEJUANG', coalition: 'GTA' },
      { name: 'Fatin Zulaikha Zaidi', party: 'DAP', coalition: 'PH' },
    ],},{
    code: 'P155',
    name: 'Tenggara',
    candidates: [
      { name: 'Manndzri Nasib', party: 'UMNO', coalition: 'BN' },
      { name: 'Mohd Nazari Mokhtar', party: 'PAS', coalition: 'PN' },
      { name: 'M Azhar Palal', party: 'PUTRA', coalition: 'GTA' },
      { name: 'Zuraidah Zainab Mohd Zain', party: 'PKR', coalition: 'PH' },
    ],},{
    code: 'P156',
    name: 'Kota Tinggi',
    candidates: [
      { name: 'Mohamed Khaled Nordin', party: 'UMNO', coalition: 'BN' },
      { name: 'Mohamad Ridhwan Rasman', party: 'BERSATU', coalition: 'PN' },
      { name: 'Onn Jaafar', party: 'AMANAH', coalition: 'PH' },
    ],},{
    code: 'P157',
    name: 'Pengerang',
    candidates: [
      { name: 'Azalina Othman Said', party: 'UMNO', coalition: 'BN' },
      { name: 'Fairulnizar Rahmat', party: 'BERSATU', coalition: 'PN' },
      { name: 'Che Zakaria Mohd Salleh', party: 'AMANAH', coalition: 'PH' },
    ],},{
    code: 'P158',
    name: 'Tebrau',
    candidates: [
      { name: 'Mohamad Isa Mohamad Basir', party: 'BERSATU', coalition: 'PN' },
      { name: 'Nicole Wong Siaw Ting', party: 'MCA', coalition: 'BN' },
      { name: 'Jimmy Puah Wee Tse', party: 'PKR', coalition: 'PH' },
    ],},{
    code: 'P159',
    name: 'Pasir Gudang',
    candidates: [
      { name: 'Hassan Abdul Karim', party: 'PKR', coalition: 'PH' },
      { name: 'Mohamad Farid Abdul Razak', party: 'BERSATU', coalition: 'PN' },
      { name: 'Mohammad Rafi Bram', party: 'IMAN', coalition: 'GTA' },
      { name: 'Noor Azleen Ambros', party: 'UMNO', coalition: 'BN' },
    ],},{
    code: 'P160',
    name: 'Johor Bahru',
    candidates: [
      { name: 'Akmal Nasrullah Mohd. Nasir', party: 'PKR', coalition: 'PH' },
      { name: 'Mohd Mohtaj Yacob', party: 'BERSATU', coalition: 'PN' },
      { name: 'Mohd Akhiri Mahmood', party: 'PEJUANG', coalition: 'GTA' },
      { name: 'Johan Arifin Mohd Ropi', party: 'UMNO', coalition: 'BN' },
    ],},{
    code: 'P161',
    name: 'Pulai',
    candidates: [
      { name: 'Salahuddin Ayub', party: 'AMANAH', coalition: 'PH' },
      { name: 'Loh Kah Yong', party: 'GERAKAN', coalition: 'PN' },
      { name: 'Nur Jazlan Mohamed', party: 'UMNO', coalition: 'BN' },
    ],},{
    code: 'P162',
    name: 'Iskandar Puteri',
    candidates: [
      { name: 'Liew Chin Tong', party: 'DAP', coalition: 'PH' },
      { name: 'Tan Nam Cha', party: 'BERSATU', coalition: 'PN' },
      { name: 'Teoh Sew Hock', party: 'MCA', coalition: 'BN' },
    ],},{
    code: 'P163',
    name: 'Kulai',
    candidates: [
      { name: 'Teo Nie Ching', party: 'DAP', coalition: 'PH' },
      { name: 'Tan Chin Hock', party: 'GERAKAN', coalition: 'PN' },
      { name: 'Chua Jian Boon', party: 'MCA', coalition: 'BN' },
    ],},{
    code: 'P164',
    name: 'Pontian',
    candidates: [
      { name: 'Ahmad Maslan', party: 'UMNO', coalition: 'BN' },
      { name: 'Isa Abdul Hamid', party: 'BERSATU', coalition: 'PN' },
      { name: 'Jamaluddin Mohamad', party: 'GB', coalition: 'GTA' },
      { name: 'Mohd Sayfaul Ariffin Abdul Karim', party: 'PKR', coalition: 'PH' },
    ],},{
    code: 'P165',
    name: 'Tanjung Piai',
    candidates: [
      { name: 'Wee Jeck Seng', party: 'MCA', coalition: 'BN' },
      { name: 'Najwah Halimah Abdul Alim', party: 'BERSATU', coalition: 'PN' },
      { name: 'Lim Wei Jiet', party: 'MUDA', coalition: 'PH' },
    ],},{
    code: 'P166',
    name: 'Labuan',
    candidates: [
      { name: 'Rozman Isli', party: 'WARISAN' },
      { name: 'Suhaili Abdul Rahman', party: 'BERSATU(S)', coalition: 'GRS' },
      { name: 'Bashir Alias', party: 'UMNO', coalition: 'BN' },
      { name: 'Ramle Mat Daly', party: 'PUTRA', coalition: 'GTA' },
      { name: 'Dayang Rusimah @ Raynie Bt Mohd Din', party: 'PBM' },
      { name: 'Ramli Tahir', party: 'AMANAH', coalition: 'PH' },
    ],},{
    code: 'P167',
    name: 'Kudat',
    candidates: [
      { name: 'Abdul Rahim Bakri', party: 'BERSATU(S)', coalition: 'GRS' },
      { name: 'Rashid Harun', party: 'WARISAN' },
      { name: 'Nur Alya Humaira Usun Abdullah', party: 'PEJUANG', coalition: 'GTA' },
      { name: 'Verdon Bahanda', party: 'Independent' },
      { name: 'Thonny Chee', party: 'PKR', coalition: 'PH' },
    ],},{
    code: 'P168',
    name: 'Kota Marudu',
    candidates: [
      { name: 'Maximus Johnity Ongkil', party: 'PBS', coalition: 'GRS' },
      { name: 'Jilid Kuminding', party: 'WARISAN' },
      { name: 'Shahrizal Denci', party: 'MUDA', coalition: 'PH' },
      { name: 'Mohd Azmee Zulkiflee', party: 'PEJUANG', coalition: 'GTA' },
      { name: 'Norman Tulang', party: 'Independent' },
      { name: 'Wetrom Bahanda', party: 'KDM' },
    ],},{
    code: 'P169',
    name: 'Kota Belud',
    candidates: [
      { name: 'Isnaraissah Munirah Majilis', party: 'WARISAN' },
      { name: 'Abdul Rahman Dahlan', party: 'UMNO', coalition: 'BN' },
      { name: 'Madely Modily Bangali', party: 'PKR', coalition: 'PH' },
    ],},{
    code: 'P170',
    name: 'Tuaran',
    candidates: [
      { name: 'Wilfred Madius Tangau', party: 'UPKO', coalition: 'PH' },
      { name: 'Joniston Bangkuai', party: 'PBS', coalition: 'GRS' },
      { name: 'Muminin Kalingkong @ Norbinsha', party: 'PEJUANG', coalition: 'GTA' },
      { name: 'Boby Lewat', party: 'Independent' },
      { name: 'Noortaip Suhaili Sualee', party: 'Independent' },
      { name: 'Jo-Anna Sue Henley Rampas', party: 'WARISAN' },
    ],},{
    code: 'P171',
    name: 'Sepanggar',
    candidates: [
      { name: 'Mohd. Azis Jamman', party: 'WARISAN' },
      { name: 'Yakubah Khan', party: 'UMNO', coalition: 'BN' },
      { name: 'Mustapha Sakmud', party: 'PKR', coalition: 'PH' },
      { name: 'Yusof Kunchang', party: 'PEJUANG', coalition: 'GTA' },
      { name: 'Jumardie Lukman', party: 'KDM' },
    ],},{
    code: 'P172',
    name: 'Kota Kinabalu',
    candidates: [
      { name: 'Chan Foong Hin', party: 'DAP', coalition: 'PH' },
      { name: 'Yee Tsai Yiew', party: 'PBS', coalition: 'GRS' },
      { name: 'Amanda Yeo Yan Yin', party: 'WARISAN' },
      { name: 'Marcel Jude', party: 'Independent' },
      { name: 'Winston Liaw Kit Siong', party: 'KDM' },
    ],},{
    code: 'P173',
    name: 'Putatan',
    candidates: [
      { name: 'Awang Husaini Awang Sahari', party: 'PKR', coalition: 'PH' },
      { name: 'Shahelmey Yahya', party: 'UMNO', coalition: 'BN' },
      { name: 'Poyne Tudus @ Patrick Payne', party: 'GB', coalition: 'GTA' },
      { name: 'Ahmad Mohd Said', party: 'WARISAN' },
    ],},{
    code: 'P174',
    name: 'Penampang',
    candidates: [
      { name: 'Darell Leiking', party: 'WARISAN' },
      { name: 'Kenny Chua Teck Ho', party: 'STAR', coalition: 'GRS' },
      { name: 'Richard Jimmy', party: 'Independent' },
      { name: 'Ewon Benedick', party: 'UPKO', coalition: 'PH' },
    ],},{
    code: 'P175',
    name: 'Papar',
    candidates: [
      { name: 'Ahmad Hassan', party: 'WARISAN' },
      { name: 'Armizan Mohd Ali', party: 'BERSATU(S)', coalition: 'GRS' },
      { name: 'Henry Shim', party: 'DAP', coalition: 'PH' },
      { name: 'Nicholas Sylvester @ Berry', party: 'PEJUANG', coalition: 'GTA' },
      { name: 'Johnny Sitamin', party: 'Independent' },
      { name: 'Nobbert Chin', party: 'Independent' },
    ],},{
    code: 'P176',
    name: 'Kimanis',
    candidates: [
      { name: 'Mohamad Alamin', party: 'UMNO', coalition: 'BN' },
      { name: 'Daud Yusof', party: 'WARISAN' },
      { name: 'Rowindy Lawrence', party: 'UPKO', coalition: 'PH' },
      { name: 'Yusop Osman', party: 'PEJUANG', coalition: 'GTA' },
      { name: 'Amat Mohd Yusof', party: 'KDM' },
    ],},{
    code: 'P177',
    name: 'Beaufort',
    candidates: [
      { name: 'Siti Aminah Aching', party: 'UMNO', coalition: 'BN' },
      { name: 'Dikin Musah', party: 'PKR', coalition: 'PH' },
      { name: 'Johair Mat Lani', party: 'KDM' },
      { name: 'Johan @ Christopher O T Ghani', party: 'Independent' },
      { name: 'Matlani Sabli', party: 'Independent' },
      { name: 'Masri Adul', party: 'WARISAN' },
    ],},{
    code: 'P178',
    name: 'Sipitang',
    candidates: [
      { name: 'Matbali Musah', party: 'BERSATU(S)', coalition: 'GRS' },
      { name: 'Lahirul Latigu', party: 'AMANAH', coalition: 'PH' },
      { name: 'Adnan Puteh', party: 'WARISAN' },
    ],},{
    code: 'P179',
    name: 'Ranau',
    candidates: [
      { name: 'Jonathan Yasin', party: 'BERSATU(S)', coalition: 'GRS' },
      { name: 'Apirin Jahalan Taufik Sham', party: 'PKR', coalition: 'PH' },
      { name: 'Azizul Julrin', party: 'PEJUANG', coalition: 'GTA' },
      { name: 'Ewon Ebin', party: 'PBRS', coalition: 'BN' },
      { name: 'Markus Siton', party: 'WARISAN' },
    ],},{
    code: 'P180',
    name: 'Keningau',
    candidates: [
      { name: 'Jeffrey Gapari Kitingan', party: 'STAR', coalition: 'GRS' },
      { name: 'Grelydia Gillod', party: 'DAP', coalition: 'PH' },
      { name: 'Jake Nointin', party: 'KDM' },
      { name: 'Rasinin Koutis', party: 'WARISAN' },
    ],},{
    code: 'P181',
    name: 'Tenom',
    candidates: [
      { name: 'Noorita Sual', party: 'DAP', coalition: 'PH' },
      { name: 'Jamawi Jaaafar', party: 'UMNO', coalition: 'BN' },
      { name: 'Ukim Buandi', party: 'WARISAN' },
      { name: 'Riduan Rubin', party: 'Independent' },
      { name: 'Peggy Chaw Zhi Ting', party: 'Independent' },
    ],},{
    code: 'P182',
    name: 'Pensiangan',
    candidates: [
      { name: 'Arthur Joseph Kurup', party: 'PBRS', coalition: 'BN' },
      { name: 'Sangkar Rasam', party: 'PKR', coalition: 'PH' },
      { name: 'Jamani Derimin @ Gampalid', party: 'PEJUANG', coalition: 'GTA' },
      { name: 'Jekerison Kilan', party: 'KDM' },
      { name: 'Siti Noorhasmahwatty Osman', party: 'WARISAN' },
    ],},{
    code: 'P183',
    name: 'Beluran',
    candidates: [
      { name: 'Benedict Amat', party: 'UMNO', coalition: 'BN' },
      { name: 'Ronald Kiandee', party: 'BERSATU(S)', coalition: 'GRS' },
      { name: 'Rowiena Rashid', party: 'WARISAN' },
      { name: 'Hausing Sudin @ Samsudin', party: 'PEJUANG', coalition: 'GTA' },
      { name: 'Felix Joseph Saang', party: 'UPKO', coalition: 'PH' },
    ],},{
    code: 'P184',
    name: 'Libaran',
    candidates: [
      { name: 'Suhaimi Nasir', party: 'UMNO', coalition: 'BN' },
      { name: 'Nordin Khani', party: 'PBRS', coalition: 'BN' },
      { name: 'SH Bokrata SH Hassan', party: 'WARISAN' },
      { name: 'Jeffri @ Amat Pudang', party: 'PEJUANG', coalition: 'GTA' },
      { name: 'Amdan Tumpong', party: 'Independent' },
      { name: 'Peter Jr Naintin', party: 'UPKO', coalition: 'PH' },
    ],},{
    code: 'P185',
    name: 'Batu Sapi',
    candidates: [
      { name: 'Alias Sani', party: 'WARISAN' },
      { name: 'Khairul Firdaus Akhbar Khan', party: 'BERSATU(S)', coalition: 'GRS' },
      { name: 'Boni Yusuf Abdullah @ Narseso P Juanico', party: 'PUTRA', coalition: 'GTA' },
      { name: 'Othman Ahmad', party: 'Independent' },
      { name: 'Liau Fui Fui', party: 'DAP', coalition: 'PH' },
    ],},{
    code: 'P186',
    name: 'Sandakan',
    candidates: [
      { name: 'Vivian Wong Shir Yee', party: 'DAP', coalition: 'PH' },
      { name: 'Lau Chee Kiong @ Thomas Lau', party: 'SAPP', coalition: 'GRS' },
      { name: 'Peter Hii', party: 'Independent' },
      { name: 'Syeikh Lokeman', party: 'Independent' },
      { name: 'Lita Tan Abdullah', party: 'Independent' },
      { name: 'Alex Thien', party: 'WARISAN' },
    ],},{
    code: 'P187',
    name: 'Kinabatangan',
    candidates: [
      { name: 'Bung Mokhtar Radin', party: 'UMNO', coalition: 'BN' },
      { name: 'Mazliwati Abdul Malek', party: 'WARISAN' },
    ],},{
    code: 'P188',
    name: 'Lahad Datu',
    candidates: [
      { name: 'Oscar Sia Yu Hock ', party: 'DAP', coalition: 'PH' },
      { name: 'Maizatul Alkam Alawi', party: 'UMNO', coalition: 'BN' },
      { name: 'Mohd Yusof Apdal', party: 'WARISAN' },
    ],},{
    code: 'P189',
    name: 'Semporna',
    candidates: [
      { name: 'Mohd. Shafie Apdal', party: 'WARISAN' },
      { name: 'Nixon Abdul Habi', party: 'BERSATU(S)', coalition: 'GRS' },
      { name: 'Abu Rajik Abu Hamid', party: 'PEJUANG', coalition: 'GTA' },
      { name: 'Arastam Pandorog', party: 'PKR', coalition: 'PH' },
    ],},{
    code: 'P190',
    name: 'Tawau',
    candidates: [
      { name: 'Christina Liew Chin Jin', party: 'PKR', coalition: 'PH' },
      { name: 'Lo Su Fui', party: 'PBS', coalition: 'GRS' },
      { name: 'Herman Amdas', party: 'PEJUANG', coalition: 'GTA' },
      { name: 'Mohd Salleh Bacho', party: 'Independent' },
      { name: 'Chin Chee Syn', party: 'Independent' },
      { name: 'Chen Ket Chuin', party: 'WARISAN' },
    ],},{
    code: 'P191',
    name: 'Kalabakan',
    candidates: [
      { name: 'Ma\'mun Sulaiman', party: 'WARISAN' },
      { name: 'Andi Muhammad Suryady Bandy', party: 'UMNO', coalition: 'BN' },
      { name: 'Muhamad', party: 'Independent' },
      { name: 'Nur Aini Abdul Rahman', party: 'PEJUANG', coalition: 'GTA' },
      { name: 'Noraini Abdul Ghapur', party: 'PKR', coalition: 'PH' },
    ],},{
    code: 'P192',
    name: 'Mas Gading',
    candidates: [
      { name: 'Mordi Bimol', party: 'DAP', coalition: 'PH' },
      { name: 'Ryan Sim Min Leong', party: 'PBK', coalition: 'GAGASAN' },
      { name: 'Lidang Disen ', party: 'PDP', coalition: 'GPS' },
    ],},{
    code: 'P193',
    name: 'Santubong',
    candidates: [
      { name: 'Nancy Shukri', party: 'PBB', coalition: 'GPS' },
      { name: 'Affendi Jeman', party: 'Independent' },
      { name: 'Mohamad Zen Peli', party: 'AMANAH', coalition: 'PH' },
    ],},{
    code: 'P194',
    name: 'Petra Jaya',
    candidates: [
      { name: 'Fadillah Yusof', party: 'PBB', coalition: 'GPS' },
      { name: 'Othman Abdillah', party: 'SEDAR' },
      { name: 'Sofian Julaihi', party: 'PKR', coalition: 'PH' },
    ],},{
    code: 'P195',
    name: 'Bandar Kuching',
    candidates: [
      { name: 'Kelvin Yii Lee Wuen', party: 'DAP', coalition: 'PH' },
      { name: 'Voon Lee Shan', party: 'PBK', coalition: 'GAGASAN' },
      { name: 'Tay Tze Kok', party: 'SUPP', coalition: 'GPS' },
    ],},{
    code: 'P196',
    name: 'Stampin',
    candidates: [
      { name: 'Chong Chieng Jen', party: 'DAP', coalition: 'PH' },
      { name: 'Lue Cheng Hing', party: 'PBK', coalition: 'GAGASAN' },
      { name: 'Lo Khre Chiang', party: 'SUPP', coalition: 'GPS' },
    ],},{
    code: 'P197',
    name: 'Kota Samarahan',
    candidates: [
      { name: 'Rubiah Wang', party: 'PBB', coalition: 'GPS' },
      { name: 'Abang Abdul Halil Abang Naili', party: 'AMANAH', coalition: 'PH' },
    ],},{
    code: 'P198',
    name: 'Puncak Borneo',
    candidates: [
      { name: 'Willie Mongin', party: 'PBB', coalition: 'GPS' },
      { name: 'Dig Dios', party: 'PKR', coalition: 'PH' },
      { name: 'Iana Akam', party: 'PSB', coalition: 'GAGASAN' },
    ],},{
    code: 'P199',
    name: 'Serian',
    candidates: [
      { name: 'Richard Riot Jaem', party: 'SUPP', coalition: 'GPS' },
      { name: 'Larry Jabul', party: 'DAP', coalition: 'PH' },
      { name: 'Alim Impira', party: 'Independent' },
      { name: 'Elsiy Tinggang', party: 'PSB', coalition: 'GAGASAN' },
    ],},{
    code: 'P200',
    name: 'Batang Sadong',
    candidates: [
      { name: 'Rodiyah Sapiee', party: 'PBB', coalition: 'GPS' },
      { name: 'Lahaji Lahiya', party: 'AMANAH', coalition: 'PH' },
    ],},{
    code: 'P201',
    name: 'Batang Lupar',
    candidates: [
      { name: 'Mohamad Shafizan Kepli', party: 'PBB', coalition: 'GPS' },
      { name: 'Hamdan Sani', party: 'PAS', coalition: 'PN' },
      { name: 'Wel@Maxwell Ak Rojis', party: 'AMANAH', coalition: 'PH' },
    ],},{
    code: 'P202',
    name: 'Sri Aman',
    candidates: [
      { name: 'Masir Kujat', party: 'Independent' },
      { name: 'Doris Sophia Brodi', party: 'PRS', coalition: 'GPS' },
      { name: 'Tay Wei Wei', party: 'PKR', coalition: 'PH' },
      { name: 'Wilson Entabang', party: 'PSB', coalition: 'GAGASAN' },
    ],},{
    code: 'P203',
    name: 'Lubok Antu',
    candidates: [
      { name: 'Jugah Muyang', party: 'BERSATU', coalition: 'PN' },
      { name: 'Roy Angau Gingkoi', party: 'PRS', coalition: 'GPS' },
      { name: 'Langga Lias', party: 'PKR', coalition: 'PH' },
      { name: 'Johnical Rayong Ngipa', party: 'PSB', coalition: 'GAGASAN' },
    ],},{
    code: 'P204',
    name: 'Betong',
    candidates: [
      { name: 'Richard Rapu @ Begri', party: 'PBB', coalition: 'GPS' },
      { name: 'Patrick Khamis', party: 'PKR', coalition: 'PH' },
      { name: 'Hasbie Satar', party: 'Independent' },
    ],},{
    code: 'P205',
    name: 'Saratok',
    candidates: [
      { name: 'Ali Biju', party: 'BERSATU', coalition: 'PN' },
      { name: 'Ibil Jaya', party: 'PKR', coalition: 'PH' },
      { name: 'Giendam Jonathan Tait', party: 'PDP', coalition: 'GPS' },
    ],},{
    code: 'P206',
    name: 'Tanjong Manis',
    candidates: [
      { name: 'Yusuf Abd. Wahab', party: 'PBB', coalition: 'GPS' },
      { name: 'Zainab Suhaili', party: 'AMANAH', coalition: 'PH' },
    ],},{
    code: 'P207',
    name: 'Igan',
    candidates: [
      { name: 'Ahmad Johnie Zawawi', party: 'PBB', coalition: 'GPS' },
      { name: 'Andri Zulkarnaen Hamden', party: 'AMANAH', coalition: 'PH' },
    ],},{
    code: 'P208',
    name: 'Sarikei',
    candidates: [
      { name: 'Roderick Wong Siew Lead', party: 'DAP', coalition: 'PH' },
      { name: 'Huang Tiong Sii', party: 'SUPP', coalition: 'GPS' },
    ],},{
    code: 'P209',
    name: 'Julau',
    candidates: [
      { name: 'Larry S\'ng Wei Shien', party: 'PBM' },
      { name: 'Joseph Salang Gandum', party: 'PRS', coalition: 'GPS' },
      { name: 'Elly Lawai Ngalai', party: 'Independent' },
      { name: 'Susan George', party: 'PBDS', coalition: 'GAGASAN' },
    ],},{
    code: 'P210',
    name: 'Kanowit',
    candidates: [
      { name: 'Aaron Ago Dagang', party: 'PRS', coalition: 'GPS' },
      { name: 'Elli Luhat', party: 'Independent' },
      { name: 'Michael Anak Lias', party: 'Independent' },
      { name: 'George Chen', party: 'Independent' },
      { name: 'Fauzi Abdullah@Joseph Nyambong', party: 'PKR', coalition: 'PH' },
    ],},{
    code: 'P211',
    name: 'Lanang',
    candidates: [
      { name: 'Alice Lau Kiong Yieng', party: 'DAP', coalition: 'PH' },
      { name: 'Wong Ching Yong', party: 'SUPP', coalition: 'GPS' },
      { name: 'Wong Tiing Kiong', party: 'Independent' },
      { name: 'Priscilla Lau', party: 'PBK', coalition: 'GAGASAN' },
    ],},{
    code: 'P212',
    name: 'Sibu',
    candidates: [
      { name: 'Oscar Ling Chai Yew', party: 'DAP', coalition: 'PH' },
      { name: 'Clarence Ting Ing Horh', party: 'SUPP', coalition: 'GPS' },
      { name: 'Wong Soon Koh', party: 'PSB', coalition: 'GAGASAN' },
    ],},{
    code: 'P213',
    name: 'Mukah',
    candidates: [
      { name: 'Hanifah Hajar Taib', party: 'PBB', coalition: 'GPS' },
      { name: 'Abdul Jalil Bujang', party: 'PKR', coalition: 'PH' },
    ],},{
    code: 'P214',
    name: 'Selangau',
    candidates: [
      { name: 'Umpang Salang', party: 'PKR', coalition: 'PH' },
      { name: 'Henry Joseph Usau', party: 'Independent' },
      { name: 'Edwin Banta', party: 'PRS', coalition: 'GPS' },
    ],},{
    code: 'P215',
    name: 'Kapit',
    candidates: [
      { name: 'Alexander Nanta Linggi', party: 'PBB', coalition: 'GPS' },
      { name: 'Khusyairy Pangkas Abdullah', party: 'PKR', coalition: 'PH' },
      { name: 'Robert Saweng', party: 'PBDS', coalition: 'GAGASAN' },
    ],},{
    code: 'P216',
    name: 'Hulu Rajang',
    candidates: [
      { name: 'Wilson Ugak Kumbong', party: 'PRS', coalition: 'GPS' },
      { name: 'Abun Sui Anyit', party: 'PKR', coalition: 'PH' },
    ],},{
    code: 'P217',
    name: 'Bintulu',
    candidates: [
      { name: 'Tiong King Sing', party: 'PDP', coalition: 'GPS' },
      { name: 'Duke Anak Jateng', party: 'BERSATU', coalition: 'PN' },
      { name: 'Tony Chiew Chan Yew', party: 'DAP', coalition: 'PH' },
    ],},{
    code: 'P218',
    name: 'Sibuti',
    candidates: [
      { name: 'Lukanisman Awang Sauni', party: 'PBB', coalition: 'GPS' },
      { name: 'Zolhaidah Suboh', party: 'PKR', coalition: 'PH' },
      { name: 'Bobby William', party: 'PBDS', coalition: 'GAGASAN' },
    ],},{
    code: 'P219',
    name: 'Miri',
    candidates: [
      { name: 'Chiew Choon Man', party: 'PKR', coalition: 'PH' },
      { name: 'Jeffery Phang Siaw Foong', party: 'SUPP', coalition: 'GPS' },
      { name: 'Lawrence Lai', party: 'PSB', coalition: 'GAGASAN' },
    ],},{
    code: 'P220',
    name: 'Baram',
    candidates: [
      { name: 'Anyi Ngau', party: 'PDP', coalition: 'GPS' },
      { name: 'Roland Egan', party: 'PKR', coalition: 'PH' },
      { name: 'Wilfred Entika', party: 'Independent' },
    ],},{
    code: 'P221',
    name: 'Limbang',
    candidates: [
      { name: 'Hasbi Habibollah', party: 'PBB', coalition: 'GPS' },
      { name: 'Racha Balang', party: 'PKR', coalition: 'PH' },
    ],},{
    code: 'P222',
    name: 'Lawas',
    candidates: [
      { name: 'Henry Sum Agong', party: 'PBB', coalition: 'GPS' },
      { name: 'Japar Suyut', party: 'PKR', coalition: 'PH' },
      { name: 'Baru Bian', party: 'PSB', coalition: 'GAGASAN' },
    ],
  },
];

export type Candidate = {
  name: string;
  party: string;
  coalition?: string;
};

export type Constituency = {
    name: string;
    code: string;
    candidates: Candidate[];
};

export default candidates;
