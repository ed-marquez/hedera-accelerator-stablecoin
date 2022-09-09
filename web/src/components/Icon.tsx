import { As, Icon as ChakraIcon, IconProps as ChakraIconProps } from '@chakra-ui/react';

import * as ReactPhosphorIcons from 'phosphor-react';

const NameIcons = [
	'Activity',
	'AddressBook',
	'Airplane',
	'AirplaneInFlight',
	'AirplaneLanding',
	'AirplaneTakeoff',
	'AirplaneTilt',
	'Airplay',
	'Alarm',
	'Alien',
	'AlignBottom',
	'AlignBottomSimple',
	'AlignCenterHorizontal',
	'AlignCenterHorizontalSimple',
	'AlignCenterVertical',
	'AlignCenterVerticalSimple',
	'AlignLeft',
	'AlignLeftSimple',
	'AlignRight',
	'AlignRightSimple',
	'AlignTop',
	'AlignTopSimple',
	'Anchor',
	'AnchorSimple',
	'AndroidLogo',
	'AngularLogo',
	'Aperture',
	'AppStoreLogo',
	'AppWindow',
	'AppleLogo',
	'ApplePodcastsLogo',
	'Archive',
	'ArchiveBox',
	'ArchiveTray',
	'Armchair',
	'ArrowArcLeft',
	'ArrowArcRight',
	'ArrowBendDoubleUpLeft',
	'ArrowBendDoubleUpRight',
	'ArrowBendDownLeft',
	'ArrowBendDownRight',
	'ArrowBendLeftDown',
	'ArrowBendLeftUp',
	'ArrowBendRightDown',
	'ArrowBendRightUp',
	'ArrowBendUpLeft',
	'ArrowBendUpRight',
	'ArrowCircleDown',
	'ArrowCircleDownLeft',
	'ArrowCircleDownRight',
	'ArrowCircleLeft',
	'ArrowCircleRight',
	'ArrowCircleUp',
	'ArrowCircleUpLeft',
	'ArrowCircleUpRight',
	'ArrowClockwise',
	'ArrowCounterClockwise',
	'ArrowDown',
	'ArrowDownLeft',
	'ArrowDownRight',
	'ArrowElbowDownLeft',
	'ArrowElbowDownRight',
	'ArrowElbowLeft',
	'ArrowElbowLeftDown',
	'ArrowElbowLeftUp',
	'ArrowElbowRight',
	'ArrowElbowRightDown',
	'ArrowElbowRightUp',
	'ArrowElbowUpLeft',
	'ArrowElbowUpRight',
	'ArrowFatDown',
	'ArrowFatLeft',
	'ArrowFatLineDown',
	'ArrowFatLineLeft',
	'ArrowFatLineRight',
	'ArrowFatLineUp',
	'ArrowFatLinesDown',
	'ArrowFatLinesLeft',
	'ArrowFatLinesRight',
	'ArrowFatLinesUp',
	'ArrowFatRight',
	'ArrowFatUp',
	'ArrowLeft',
	'ArrowLineDown',
	'ArrowLineDownLeft',
	'ArrowLineDownRight',
	'ArrowLineLeft',
	'ArrowLineRight',
	'ArrowLineUp',
	'ArrowLineUpLeft',
	'ArrowLineUpRight',
	'ArrowRight',
	'ArrowSquareDown',
	'ArrowSquareDownLeft',
	'ArrowSquareDownRight',
	'ArrowSquareIn',
	'ArrowSquareLeft',
	'ArrowSquareOut',
	'ArrowSquareRight',
	'ArrowSquareUp',
	'ArrowSquareUpLeft',
	'ArrowSquareUpRight',
	'ArrowUDownLeft',
	'ArrowUDownRight',
	'ArrowULeftDown',
	'ArrowULeftUp',
	'ArrowURightDown',
	'ArrowURightUp',
	'ArrowUUpLeft',
	'ArrowUUpRight',
	'ArrowUp',
	'ArrowUpLeft',
	'ArrowUpRight',
	'ArrowsClockwise',
	'ArrowsCounterClockwise',
	'ArrowsDownUp',
	'ArrowsHorizontal',
	'ArrowsIn',
	'ArrowsInCardinal',
	'ArrowsInLineHorizontal',
	'ArrowsInLineVertical',
	'ArrowsInSimple',
	'ArrowsLeftRight',
	'ArrowsOut',
	'ArrowsOutCardinal',
	'ArrowsOutLineHorizontal',
	'ArrowsOutLineVertical',
	'ArrowsOutSimple',
	'ArrowsVertical',
	'Article',
	'ArticleMedium',
	'ArticleNyTimes',
	'Asterisk',
	'AsteriskSimple',
	'At',
	'Atom',
	'Baby',
	'Backpack',
	'Backspace',
	'Bag',
	'BagSimple',
	'Balloon',
	'Bandaids',
	'Bank',
	'Barbell',
	'Barcode',
	'Barricade',
	'Baseball',
	'Basketball',
	'Bathtub',
	'BatteryCharging',
	'BatteryChargingVertical',
	'BatteryEmpty',
	'BatteryFull',
	'BatteryHigh',
	'BatteryLow',
	'BatteryMedium',
	'BatteryPlus',
	'BatteryWarning',
	'BatteryWarningVertical',
	'Bed',
	'BeerBottle',
	'BehanceLogo',
	'Bell',
	'BellRinging',
	'BellSimple',
	'BellSimpleRinging',
	'BellSimpleSlash',
	'BellSimpleZ',
	'BellSlash',
	'BellZ',
	'BezierCurve',
	'Bicycle',
	'Binoculars',
	'Bird',
	'Bluetooth',
	'BluetoothConnected',
	'BluetoothSlash',
	'BluetoothX',
	'Boat',
	'Book',
	'BookBookmark',
	'BookOpen',
	'Bookmark',
	'BookmarkSimple',
	'Bookmarks',
	'BookmarksSimple',
	'Books',
	'BoundingBox',
	'BracketsAngle',
	'BracketsCurly',
	'BracketsRound',
	'BracketsSquare',
	'Brain',
	'Brandy',
	'Briefcase',
	'BriefcaseMetal',
	'Broadcast',
	'Browser',
	'Browsers',
	'Bug',
	'BugBeetle',
	'BugDroid',
	'Buildings',
	'Bus',
	'Butterfly',
	'Cactus',
	'Cake',
	'Calculator',
	'Calendar',
	'CalendarBlank',
	'CalendarCheck',
	'CalendarPlus',
	'CalendarX',
	'Camera',
	'CameraRotate',
	'CameraSlash',
	'Campfire',
	'Car',
	'CarSimple',
	'Cardholder',
	'Cards',
	'CaretCircleDoubleDown',
	'CaretCircleDoubleLeft',
	'CaretCircleDoubleRight',
	'CaretCircleDoubleUp',
	'CaretCircleDown',
	'CaretCircleLeft',
	'CaretCircleRight',
	'CaretCircleUp',
	'CaretDoubleDown',
	'CaretDoubleLeft',
	'CaretDoubleRight',
	'CaretDoubleUp',
	'CaretDown',
	'CaretLeft',
	'CaretRight',
	'CaretUp',
	'Cat',
	'CellSignalFull',
	'CellSignalHigh',
	'CellSignalLow',
	'CellSignalMedium',
	'CellSignalNone',
	'CellSignalSlash',
	'CellSignalX',
	'Chalkboard',
	'ChalkboardSimple',
	'ChalkboardTeacher',
	'ChartBar',
	'ChartBarHorizontal',
	'ChartLine',
	'ChartLineUp',
	'ChartPie',
	'ChartPieSlice',
	'Chat',
	'ChatCentered',
	'ChatCenteredDots',
	'ChatCenteredText',
	'ChatCircle',
	'ChatCircleDots',
	'ChatCircleText',
	'ChatDots',
	'ChatTeardrop',
	'ChatTeardropDots',
	'ChatTeardropText',
	'ChatText',
	'Chats',
	'ChatsCircle',
	'ChatsTeardrop',
	'Check',
	'CheckCircle',
	'CheckSquare',
	'CheckSquareOffset',
	'Checks',
	'Circle',
	'CircleDashed',
	'CircleHalf',
	'CircleHalfTilt',
	'CircleNotch',
	'CircleWavy',
	'CircleWavyCheck',
	'CircleWavyQuestion',
	'CircleWavyWarning',
	'CirclesFour',
	'CirclesThree',
	'CirclesThreePlus',
	'Clipboard',
	'ClipboardText',
	'Clock',
	'ClockAfternoon',
	'ClockClockwise',
	'ClockCounterClockwise',
	'ClosedCaptioning',
	'Cloud',
	'CloudArrowDown',
	'CloudArrowUp',
	'CloudCheck',
	'CloudFog',
	'CloudLightning',
	'CloudMoon',
	'CloudRain',
	'CloudSlash',
	'CloudSnow',
	'CloudSun',
	'Club',
	'CoatHanger',
	'Code',
	'CodeSimple',
	'CodepenLogo',
	'CodesandboxLogo',
	'Coffee',
	'Coin',
	'CoinVertical',
	'Coins',
	'Columns',
	'Command',
	'Compass',
	'ComputerTower',
	'Confetti',
	'Cookie',
	'CookingPot',
	'Copy',
	'CopySimple',
	'Copyleft',
	'Copyright',
	'CornersIn',
	'CornersOut',
	'Cpu',
	'CreditCard',
	'Crop',
	'Crosshair',
	'CrosshairSimple',
	'Crown',
	'CrownSimple',
	'Cube',
	'CurrencyBtc',
	'CurrencyCircleDollar',
	'CurrencyCny',
	'CurrencyDollar',
	'CurrencyDollarSimple',
	'CurrencyEth',
	'CurrencyEur',
	'CurrencyGbp',
	'CurrencyInr',
	'CurrencyJpy',
	'CurrencyKrw',
	'CurrencyKzt',
	'CurrencyNgn',
	'CurrencyRub',
	'Cursor',
	'CursorText',
	'Cylinder',
	'Database',
	'Desktop',
	'DesktopTower',
	'Detective',
	'DeviceMobile',
	'DeviceMobileCamera',
	'DeviceMobileSpeaker',
	'DeviceTablet',
	'DeviceTabletCamera',
	'DeviceTabletSpeaker',
	'Diamond',
	'DiamondsFour',
	'DiceFive',
	'DiceFour',
	'DiceOne',
	'DiceSix',
	'DiceThree',
	'DiceTwo',
	'Disc',
	'DiscordLogo',
	'Divide',
	'Dog',
	'Door',
	'DotsNine',
	'DotsSix',
	'DotsSixVertical',
	'DotsThree',
	'DotsThreeCircle',
	'DotsThreeCircleVertical',
	'DotsThreeOutline',
	'DotsThreeOutlineVertical',
	'DotsThreeVertical',
	'Download',
	'DownloadSimple',
	'DribbbleLogo',
	'Drop',
	'DropHalf',
	'DropHalfBottom',
	'Ear',
	'EarSlash',
	'Egg',
	'EggCrack',
	'Eject',
	'EjectSimple',
	'Envelope',
	'EnvelopeOpen',
	'EnvelopeSimple',
	'EnvelopeSimpleOpen',
	'Equalizer',
	'Equals',
	'Eraser',
	'Exam',
	'Export',
	'Eye',
	'EyeClosed',
	'EyeSlash',
	'Eyedropper',
	'EyedropperSample',
	'Eyeglasses',
	'FaceMask',
	'FacebookLogo',
	'Factory',
	'Faders',
	'FadersHorizontal',
	'FastForward',
	'FastForwardCircle',
	'FigmaLogo',
	'File',
	'FileArrowDown',
	'FileArrowUp',
	'FileAudio',
	'FileCloud',
	'FileCode',
	'FileCss',
	'FileCsv',
	'FileDoc',
	'FileDotted',
	'FileHtml',
	'FileImage',
	'FileJpg',
	'FileJs',
	'FileJsx',
	'FileLock',
	'FileMinus',
	'FilePdf',
	'FilePlus',
	'FilePng',
	'FilePpt',
	'FileRs',
	'FileSearch',
	'FileText',
	'FileTs',
	'FileTsx',
	'FileVideo',
	'FileVue',
	'FileX',
	'FileXls',
	'FileZip',
	'Files',
	'FilmScript',
	'FilmSlate',
	'FilmStrip',
	'Fingerprint',
	'FingerprintSimple',
	'FinnTheHuman',
	'Fire',
	'FireSimple',
	'FirstAid',
	'FirstAidKit',
	'Fish',
	'FishSimple',
	'Flag',
	'FlagBanner',
	'FlagCheckered',
	'Flame',
	'Flashlight',
	'Flask',
	'FloppyDisk',
	'FloppyDiskBack',
	'FlowArrow',
	'Flower',
	'FlowerLotus',
	'FlyingSaucer',
	'Folder',
	'FolderDotted',
	'FolderLock',
	'FolderMinus',
	'FolderNotch',
	'FolderNotchMinus',
	'FolderNotchOpen',
	'FolderNotchPlus',
	'FolderOpen',
	'FolderPlus',
	'FolderSimple',
	'FolderSimpleDotted',
	'FolderSimpleLock',
	'FolderSimpleMinus',
	'FolderSimplePlus',
	'FolderSimpleStar',
	'FolderSimpleUser',
	'FolderStar',
	'FolderUser',
	'Folders',
	'Football',
	'ForkKnife',
	'FrameCorners',
	'FramerLogo',
	'Function',
	'Funnel',
	'FunnelSimple',
	'GameController',
	'GasPump',
	'Gauge',
	'Gear',
	'GearSix',
	'GenderFemale',
	'GenderIntersex',
	'GenderMale',
	'GenderNeuter',
	'GenderNonbinary',
	'GenderTransgender',
	'Ghost',
	'Gif',
	'Gift',
	'GitBranch',
	'GitCommit',
	'GitDiff',
	'GitFork',
	'GitMerge',
	'GitPullRequest',
	'GithubLogo',
	'GitlabLogo',
	'GitlabLogoSimple',
	'Globe',
	'GlobeHemisphereEast',
	'GlobeHemisphereWest',
	'GlobeSimple',
	'GlobeStand',
	'GoogleChromeLogo',
	'GoogleLogo',
	'GooglePhotosLogo',
	'GooglePlayLogo',
	'GooglePodcastsLogo',
	'Gradient',
	'GraduationCap',
	'Graph',
	'GridFour',
	'Hamburger',
	'Hand',
	'HandEye',
	'HandFist',
	'HandGrabbing',
	'HandPalm',
	'HandPointing',
	'HandSoap',
	'HandWaving',
	'Handbag',
	'HandbagSimple',
	'HandsClapping',
	'Handshake',
	'HardDrive',
	'HardDrives',
	'Hash',
	'HashStraight',
	'Headlights',
	'Headphones',
	'Headset',
	'Heart',
	'HeartBreak',
	'HeartStraight',
	'HeartStraightBreak',
	'Heartbeat',
	'Hexagon',
	'HighlighterCircle',
	'Horse',
	'Hourglass',
	'HourglassHigh',
	'HourglassLow',
	'HourglassMedium',
	'HourglassSimple',
	'HourglassSimpleHigh',
	'HourglassSimpleLow',
	'HourglassSimpleMedium',
	'House',
	'HouseLine',
	'HouseSimple',
	'IconContext',
	'IdentificationBadge',
	'IdentificationCard',
	'Image',
	'ImageSquare',
	'Infinity',
	'Info',
	'InstagramLogo',
	'Intersect',
	'Jeep',
	'Kanban',
	'Key',
	'KeyReturn',
	'Keyboard',
	'Keyhole',
	'Knife',
	'Ladder',
	'LadderSimple',
	'Lamp',
	'Laptop',
	'Layout',
	'Leaf',
	'Lifebuoy',
	'Lightbulb',
	'LightbulbFilament',
	'Lightning',
	'LightningSlash',
	'LineSegment',
	'LineSegments',
	'Link',
	'LinkBreak',
	'LinkSimple',
	'LinkSimpleBreak',
	'LinkSimpleHorizontal',
	'LinkSimpleHorizontalBreak',
	'LinkedinLogo',
	'LinuxLogo',
	'List',
	'ListBullets',
	'ListChecks',
	'ListDashes',
	'ListNumbers',
	'ListPlus',
	'Lock',
	'LockKey',
	'LockKeyOpen',
	'LockLaminated',
	'LockLaminatedOpen',
	'LockOpen',
	'LockSimple',
	'LockSimpleOpen',
	'MagicWand',
	'Magnet',
	'MagnetStraight',
	'MagnifyingGlass',
	'MagnifyingGlassMinus',
	'MagnifyingGlassPlus',
	'MapPin',
	'MapPinLine',
	'MapTrifold',
	'MarkerCircle',
	'Martini',
	'MaskHappy',
	'MaskSad',
	'MathOperations',
	'Medal',
	'MediumLogo',
	'Megaphone',
	'MegaphoneSimple',
	'MessengerLogo',
	'Microphone',
	'MicrophoneSlash',
	'MicrophoneStage',
	'MicrosoftExcelLogo',
	'MicrosoftPowerpointLogo',
	'MicrosoftTeamsLogo',
	'MicrosoftWordLogo',
	'Minus',
	'MinusCircle',
	'Money',
	'Monitor',
	'MonitorPlay',
	'Moon',
	'MoonStars',
	'Mountains',
	'Mouse',
	'MouseSimple',
	'MusicNote',
	'MusicNoteSimple',
	'MusicNotes',
	'MusicNotesPlus',
	'MusicNotesSimple',
	'NavigationArrow',
	'Needle',
	'Newspaper',
	'NewspaperClipping',
	'Note',
	'NoteBlank',
	'NotePencil',
	'Notebook',
	'Notepad',
	'Notification',
	'NumberCircleEight',
	'NumberCircleFive',
	'NumberCircleFour',
	'NumberCircleNine',
	'NumberCircleOne',
	'NumberCircleSeven',
	'NumberCircleSix',
	'NumberCircleThree',
	'NumberCircleTwo',
	'NumberCircleZero',
	'NumberEight',
	'NumberFive',
	'NumberFour',
	'NumberNine',
	'NumberOne',
	'NumberSeven',
	'NumberSix',
	'NumberSquareEight',
	'NumberSquareFive',
	'NumberSquareFour',
	'NumberSquareNine',
	'NumberSquareOne',
	'NumberSquareSeven',
	'NumberSquareSix',
	'NumberSquareThree',
	'NumberSquareTwo',
	'NumberSquareZero',
	'NumberThree',
	'NumberTwo',
	'NumberZero',
	'Nut',
	'NyTimesLogo',
	'Octagon',
	'Option',
	'Package',
	'PaintBrush',
	'PaintBrushBroad',
	'PaintBrushHousehold',
	'PaintBucket',
	'PaintRoller',
	'Palette',
	'PaperPlane',
	'PaperPlaneRight',
	'PaperPlaneTilt',
	'Paperclip',
	'PaperclipHorizontal',
	'Parachute',
	'Password',
	'Path',
	'Pause',
	'PauseCircle',
	'PawPrint',
	'Peace',
	'Pen',
	'PenNib',
	'PenNibStraight',
	'Pencil',
	'PencilCircle',
	'PencilLine',
	'PencilSimple',
	'PencilSimpleLine',
	'Percent',
	'Person',
	'PersonSimple',
	'PersonSimpleRun',
	'PersonSimpleWalk',
	'Perspective',
	'Phone',
	'PhoneCall',
	'PhoneDisconnect',
	'PhoneIncoming',
	'PhoneOutgoing',
	'PhoneSlash',
	'PhoneX',
	'PhosphorLogo',
	'PianoKeys',
	'PictureInPicture',
	'Pill',
	'PinterestLogo',
	'Pinwheel',
	'Pizza',
	'Placeholder',
	'Planet',
	'Play',
	'PlayCircle',
	'Playlist',
	'Plug',
	'Plugs',
	'PlugsConnected',
	'Plus',
	'PlusCircle',
	'PlusMinus',
	'PokerChip',
	'PoliceCar',
	'Polygon',
	'Popcorn',
	'Power',
	'Prescription',
	'Presentation',
	'PresentationChart',
	'Printer',
	'Prohibit',
	'ProhibitInset',
	'ProjectorScreen',
	'ProjectorScreenChart',
	'PushPin',
	'PushPinSimple',
	'PushPinSimpleSlash',
	'PushPinSlash',
	'PuzzlePiece',
	'QrCode',
	'Question',
	'Queue',
	'Quotes',
	'Radical',
	'Radio',
	'RadioButton',
	'Rainbow',
	'RainbowCloud',
	'Receipt',
	'Record',
	'Rectangle',
	'Recycle',
	'RedditLogo',
	'Repeat',
	'RepeatOnce',
	'Rewind',
	'RewindCircle',
	'Robot',
	'Rocket',
	'RocketLaunch',
	'Rows',
	'Rss',
	'RssSimple',
	'Rug',
	'Ruler',
	'Scales',
	'Scan',
	'Scissors',
	'Screencast',
	'ScribbleLoop',
	'Scroll',
	'Selection',
	'SelectionAll',
	'SelectionBackground',
	'SelectionForeground',
	'SelectionInverse',
	'SelectionPlus',
	'SelectionSlash',
	'Share',
	'ShareNetwork',
	'Shield',
	'ShieldCheck',
	'ShieldCheckered',
	'ShieldChevron',
	'ShieldPlus',
	'ShieldSlash',
	'ShieldStar',
	'ShieldWarning',
	'ShoppingBag',
	'ShoppingBagOpen',
	'ShoppingCart',
	'ShoppingCartSimple',
	'Shower',
	'Shuffle',
	'ShuffleAngular',
	'ShuffleSimple',
	'Sidebar',
	'SidebarSimple',
	'SignIn',
	'SignOut',
	'Signpost',
	'SimCard',
	'SketchLogo',
	'SkipBack',
	'SkipBackCircle',
	'SkipForward',
	'SkipForwardCircle',
	'Skull',
	'SlackLogo',
	'Sliders',
	'SlidersHorizontal',
	'Smiley',
	'SmileyBlank',
	'SmileyMeh',
	'SmileyNervous',
	'SmileySad',
	'SmileySticker',
	'SmileyWink',
	'SmileyXEyes',
	'SnapchatLogo',
	'Snowflake',
	'SoccerBall',
	'SortAscending',
	'SortDescending',
	'Spade',
	'Sparkle',
	'SpeakerHigh',
	'SpeakerLow',
	'SpeakerNone',
	'SpeakerSimpleHigh',
	'SpeakerSimpleLow',
	'SpeakerSimpleNone',
	'SpeakerSimpleSlash',
	'SpeakerSimpleX',
	'SpeakerSlash',
	'SpeakerX',
	'Spinner',
	'SpinnerGap',
	'Spiral',
	'SpotifyLogo',
	'Square',
	'SquareHalf',
	'SquareHalfBottom',
	'SquareLogo',
	'SquaresFour',
	'Stack',
	'StackOverflowLogo',
	'StackSimple',
	'Stamp',
	'Star',
	'StarFour',
	'StarHalf',
	'Sticker',
	'Stop',
	'StopCircle',
	'Storefront',
	'Strategy',
	'StripeLogo',
	'Student',
	'Suitcase',
	'SuitcaseSimple',
	'Sun',
	'SunDim',
	'SunHorizon',
	'Sunglasses',
	'Swap',
	'Swatches',
	'Sword',
	'Syringe',
	'TShirt',
	'Table',
	'Tabs',
	'Tag',
	'TagChevron',
	'TagSimple',
	'Target',
	'Taxi',
	'TelegramLogo',
	'Television',
	'TelevisionSimple',
	'TennisBall',
	'Terminal',
	'TerminalWindow',
	'TestTube',
	'TextAa',
	'TextAlignCenter',
	'TextAlignJustify',
	'TextAlignLeft',
	'TextAlignRight',
	'TextBolder',
	'TextH',
	'TextHFive',
	'TextHFour',
	'TextHOne',
	'TextHSix',
	'TextHThree',
	'TextHTwo',
	'TextIndent',
	'TextItalic',
	'TextOutdent',
	'TextStrikethrough',
	'TextT',
	'TextUnderline',
	'Textbox',
	'Thermometer',
	'ThermometerCold',
	'ThermometerHot',
	'ThermometerSimple',
	'ThumbsDown',
	'ThumbsUp',
	'Ticket',
	'TiktokLogo',
	'Timer',
	'ToggleLeft',
	'ToggleRight',
	'Toilet',
	'ToiletPaper',
	'Tote',
	'ToteSimple',
	'TrademarkRegistered',
	'TrafficCone',
	'TrafficSign',
	'TrafficSignal',
	'Train',
	'TrainRegional',
	'TrainSimple',
	'Translate',
	'Trash',
	'TrashSimple',
	'Tray',
	'Tree',
	'TreeEvergreen',
	'TreeStructure',
	'TrendDown',
	'TrendUp',
	'Triangle',
	'Trophy',
	'Truck',
	'TwitchLogo',
	'TwitterLogo',
	'Umbrella',
	'UmbrellaSimple',
	'Upload',
	'UploadSimple',
	'User',
	'UserCircle',
	'UserCircleGear',
	'UserCircleMinus',
	'UserCirclePlus',
	'UserFocus',
	'UserGear',
	'UserList',
	'UserMinus',
	'UserPlus',
	'UserRectangle',
	'UserSquare',
	'UserSwitch',
	'Users',
	'UsersFour',
	'UsersThree',
	'Vault',
	'Vibrate',
	'VideoCamera',
	'VideoCameraSlash',
	'Vignette',
	'Voicemail',
	'Volleyball',
	'Wall',
	'Wallet',
	'Warning',
	'WarningCircle',
	'WarningOctagon',
	'Watch',
	'WaveSawtooth',
	'WaveSine',
	'WaveSquare',
	'WaveTriangle',
	'Waves',
	'Webcam',
	'WhatsappLogo',
	'Wheelchair',
	'WifiHigh',
	'WifiLow',
	'WifiMedium',
	'WifiNone',
	'WifiSlash',
	'WifiX',
	'Wind',
	'WindowsLogo',
	'Wine',
	'Wrench',
	'X',
	'XCircle',
	'XSquare',
	'YinYang',
	'YoutubeLogo',
];

export interface IconProps extends ChakraIconProps {
	name: typeof NameIcons[number];
}

const Icon = ({ name, ...props }: IconProps) => {
	const phosphorName = `${name}` as keyof typeof ReactPhosphorIcons;

	if (!(phosphorName in ReactPhosphorIcons)) {
		throw new Error(`Icon '${name}' not found.`);
	}

	return <ChakraIcon as={ReactPhosphorIcons[phosphorName] as As} {...props} />;
};

export default Icon;
