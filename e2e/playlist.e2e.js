describe('Playlists Screen Testing', () => {
  beforeAll(async () => {
    await device.launchApp();
    await element(by.id('libraryTab')).tap();
    await element(by.text('Playlists')).tap();
  });

  beforeEach(async () => {
    // await device.reloadReactNative();
    // await element(by.id('libraryTab')).tap();
    // await element(by.text('Playlists')).tap();
  });

  // TC03
  it('should show playlists screen after tap', async () => {
    await expect(element(by.id('playlistsScreen'))).toBeVisible();
  });

  // TC01
  it('should show playlists screen after tap', async () => {
    // await expect(element(by.text('Playlists'))).toBeVisible();
    await expect(element(by.text('Create new playlist'))).toBeVisible();
  });

  // TC04
  it('should show song of playlist', async () => {
    await expect(element(by.id('listItem0'))).toBeVisible();
    await element(by.id('listItem0')).tap();
    await expect(element(by.id('showPlaylistScreen'))).toBeVisible();

    await device.pressBack();
  });

  // TC05
  it('should show song of playlist', async () => {
    await expect(element(by.id('listItem0'))).toBeVisible();
    await element(by.id('listItem0')).multiTap(2);
    await expect(element(by.id('showPlaylistScreen'))).toBeVisible();

    await device.pressBack();
  });

  // TC06
  it('should show playlists options', async () => {
    // await expect(element(by.text('Playlists'))).toBeVisible();
    await expect(element(by.id('showOptionButton0'))).toBeVisible();
    await element(by.id('showOptionButton0')).tap();

    await expect(element(by.text('Rename'))).toBeVisible();
    await expect(element(by.text('Delete'))).toBeVisible();
    await device.pressBack();
  });

  // TC07
  it('should show playlists options', async () => {
    // await expect(element(by.text('Playlists'))).toBeVisible();
    await expect(element(by.id('showOptionButton0'))).toBeVisible();
    await element(by.id('showOptionButton0')).multiTap(2);

    await expect(element(by.text('Rename'))).toBeVisible();
    await expect(element(by.text('Delete'))).toBeVisible();
    await device.pressBack();
  });

  // Check create playlist //

  // TC03 Create playlist
  it('should show create playlist popup', async () => {
    // await expect(element(by.text('Playlists'))).toBeVisible();
    await element(by.text('Create new playlist')).tap();
    await expect(element(by.text('Create playlist'))).toBeVisible();
    await element(by.id('cancelButton')).tap();
  });

  // TC01, 14 Create playlist
  it('should show create playlist popup action', async () => {
    // await expect(element(by.text('Playlists'))).toBeVisible();
    await element(by.text('Create new playlist')).tap();
    await expect(element(by.text('Create playlist'))).toBeVisible();

    await expect(element(by.id('cancelButton'))).toBeVisible();
    await expect(element(by.id('saveButton'))).toBeVisible();
    await element(by.id('cancelButton')).tap();
  });

  // TC13, 04 Create demo playlist
  it('should show create playlist ', async () => {
    await element(by.text('Create new playlist')).tap();

    await element(by.id('dialogInput')).replaceText('test playlist');
    await expect(element(by.id('saveButton'))).toBeVisible();
    await element(by.id('saveButton')).tap();
    await expect(element(by.text('test playlist'))).toBeVisible();
  });

  // TC05 should show create playlist number name
  it('should show create playlist number name', async () => {
    await element(by.text('Create new playlist')).tap();

    await element(by.id('dialogInput')).replaceText('123');
    await expect(element(by.id('saveButton'))).toBeVisible();
    await element(by.id('saveButton')).tap();
    await expect(element(by.text('123'))).toBeVisible();
  });

  // TC06
  it('should show create playlist special name', async () => {
    await element(by.text('Create new playlist')).tap();

    await element(by.id('dialogInput')).replaceText('!!!');
    await expect(element(by.id('saveButton'))).toBeVisible();
    await element(by.id('saveButton')).tap();
    await expect(element(by.text('!!!'))).toBeVisible();
  });

  // TC07
  it('should show create playlist vietnamese name', async () => {
    await element(by.text('Create new playlist')).tap();

    await element(by.id('dialogInput')).replaceText('Hay Nhất');
    await expect(element(by.id('saveButton'))).toBeVisible();
    await element(by.id('saveButton')).tap();
    await expect(element(by.text('Hay Nhất'))).toBeVisible();
  });

  // TC08
  it('should show create playlist lowercase name', async () => {
    await element(by.text('Create new playlist')).tap();

    await element(by.id('dialogInput')).replaceText('nhạc hay');
    await expect(element(by.id('saveButton'))).toBeVisible();
    await element(by.id('saveButton')).tap();
    await expect(element(by.text('nhạc hay'))).toBeVisible();
  });

  // TC09
  it('should show create playlist uppercase name', async () => {
    await element(by.text('Create new playlist')).tap();

    await element(by.id('dialogInput')).replaceText('NHẠC HAY NHẤT');
    await expect(element(by.id('saveButton'))).toBeVisible();
    await element(by.id('saveButton')).tap();
    await expect(element(by.text('NHẠC HAY NHẤT'))).toBeVisible();
  });

  // TC10
  it('should not able create playlist with empty name', async () => {
    await element(by.text('Create new playlist')).tap();
    await expect(element(by.id('saveButton'))).toBeVisible();
    await element(by.id('saveButton')).tap();
    await expect(element(by.id('saveButton'))).toBeVisible();
    await expect(element(by.id('cancelButton'))).toBeVisible();
    await element(by.id('cancelButton')).tap();
  });

  // TC11
  it('should not able create playlist with space name', async () => {
    await element(by.text('Create new playlist')).tap();
    await element(by.id('dialogInput')).replaceText('    ');
    await expect(element(by.id('saveButton'))).toBeVisible();
    await element(by.id('saveButton')).tap();
    await expect(element(by.id('saveButton'))).toBeVisible();
    await expect(element(by.id('cancelButton'))).toBeVisible();
    await element(by.id('cancelButton')).tap();
  });

  // TC12
  it('should not able create playlist with exist name', async () => {
    await element(by.text('Create new playlist')).tap();
    await element(by.id('dialogInput')).replaceText('Hay Nhất');
    await expect(element(by.id('saveButton'))).toBeVisible();
    await element(by.id('saveButton')).tap();
    await expect(element(by.id('saveButton'))).toBeVisible();
    await expect(element(by.id('cancelButton'))).toBeVisible();
    await element(by.id('cancelButton')).tap();
  });

  // Check rename playlist //
  // TC15, TC16, TC30, TC31
  it('should show rename options', async () => {
    await expect(element(by.id('showOptionButton0'))).toBeVisible();
    await element(by.id('showOptionButton0')).tap();
    await expect(element(by.text('Rename'))).toBeVisible();
    await element(by.text('Rename')).tap();

    await expect(element(by.text('CANCEL'))).toBeVisible();
    await expect(element(by.text('RENAME'))).toBeVisible();

    await element(by.text('CANCEL')).tap();
    await expect(element(by.text('RENAME'))).not.toBeVisible();

    await element(by.text('Rename')).tap();
    await element(by.text('CANCEL')).multiTap(2);
    await expect(element(by.text('RENAME'))).not.toBeVisible();

    await device.pressBack();
  });

  // TC28
  it('should able to rename playlist', async () => {
    await expect(element(by.id('showOptionButton0'))).toBeVisible();
    await element(by.id('showOptionButton0')).tap();
    await expect(element(by.text('Rename'))).toBeVisible();
    await element(by.text('Rename')).tap();

    await expect(element(by.id('dialogInput'))).toBeVisible();
    await element(by.id('dialogInput')).replaceText('Hay Nhat 111');
    await element(by.text('RENAME')).tap();
    await expect(element(by.text('Hay Nhat 111'))).toBeVisible();
  });

  // TC29
  it('should able to rename playlist', async () => {
    await expect(element(by.id('showOptionButton0'))).toBeVisible();
    await element(by.id('showOptionButton0')).tap();
    await expect(element(by.text('Rename'))).toBeVisible();
    await element(by.text('Rename')).tap();

    await expect(element(by.id('dialogInput'))).toBeVisible();
    await element(by.id('dialogInput')).replaceText('Hay Nhat 1111');
    await element(by.text('RENAME')).multiTap(2);
    await expect(element(by.text('Hay Nhat 1111'))).toBeVisible();
  });

  // TC17
  it('should able to rename alphabet playlist', async () => {
    await expect(element(by.id('showOptionButton0'))).toBeVisible();
    await element(by.id('showOptionButton0')).tap();
    await expect(element(by.text('Rename'))).toBeVisible();
    await element(by.text('Rename')).tap();

    await expect(element(by.id('dialogInput'))).toBeVisible();
    await element(by.id('dialogInput')).replaceText('abc');
    await element(by.text('RENAME')).tap();
    await expect(element(by.text('abc'))).toBeVisible();
  });

  // TC18
  it('should able to rename number name playlist', async () => {
    await expect(element(by.id('showOptionButton0'))).toBeVisible();
    await element(by.id('showOptionButton0')).tap();
    await expect(element(by.text('Rename'))).toBeVisible();
    await element(by.text('Rename')).tap();

    await expect(element(by.id('dialogInput'))).toBeVisible();
    await element(by.id('dialogInput')).replaceText('4567');
    await element(by.text('RENAME')).tap();
    await expect(element(by.text('4567'))).toBeVisible();
  });

  // TC19
  it('should able to rename special name playlist', async () => {
    await expect(element(by.id('showOptionButton0'))).toBeVisible();
    await element(by.id('showOptionButton0')).tap();
    await expect(element(by.text('Rename'))).toBeVisible();
    await element(by.text('Rename')).tap();

    await expect(element(by.id('dialogInput'))).toBeVisible();
    await element(by.id('dialogInput')).replaceText('4567');
    await element(by.text('RENAME')).tap();
    await expect(element(by.text('4567'))).toBeVisible();
  });

  // TC20
  it('should able to rename vietnamese name playlist', async () => {
    await expect(element(by.id('showOptionButton0'))).toBeVisible();
    await element(by.id('showOptionButton0')).tap();
    await expect(element(by.text('Rename'))).toBeVisible();
    await element(by.text('Rename')).tap();

    await expect(element(by.id('dialogInput'))).toBeVisible();
    await element(by.id('dialogInput')).replaceText('Playlist Hay Nhất');
    await element(by.text('RENAME')).tap();
    await expect(element(by.text('Playlist Hay Nhất'))).toBeVisible();
  });

  // TC21
  it('should able to rename lowercase name playlist', async () => {
    await expect(element(by.id('showOptionButton0'))).toBeVisible();
    await element(by.id('showOptionButton0')).tap();
    await expect(element(by.text('Rename'))).toBeVisible();
    await element(by.text('Rename')).tap();

    await expect(element(by.id('dialogInput'))).toBeVisible();
    await element(by.id('dialogInput')).replaceText('nhạc hay tháng');
    await element(by.text('RENAME')).tap();
    await expect(element(by.text('nhạc hay tháng'))).toBeVisible();
  });

  // TC22
  it('should able to rename uppercase name playlist', async () => {
    await expect(element(by.id('showOptionButton0'))).toBeVisible();
    await element(by.id('showOptionButton0')).tap();
    await expect(element(by.text('Rename'))).toBeVisible();
    await element(by.text('Rename')).tap();

    await expect(element(by.id('dialogInput'))).toBeVisible();
    await element(by.id('dialogInput')).replaceText('NHẠC HAY NĂM 2021');
    await element(by.text('RENAME')).tap();
    await expect(element(by.text('NHẠC HAY NĂM 2021'))).toBeVisible();
  });

  // TC23 TC24, TC25, TC26, TC27
  it('should able to rename uppercase name playlist', async () => {
    await expect(element(by.id('showOptionButton0'))).toBeVisible();
    await element(by.id('showOptionButton0')).tap();
    await expect(element(by.text('Rename'))).toBeVisible();
    await element(by.text('Rename')).tap();

    // Empty
    await expect(element(by.id('dialogInput'))).toBeVisible();
    await element(by.id('dialogInput')).replaceText('');
    await element(by.text('RENAME')).tap();
    await expect(element(by.text('RENAME'))).toBeVisible();

    // Space
    await element(by.id('dialogInput')).replaceText('     ');
    await element(by.text('RENAME')).tap();
    await expect(element(by.text('RENAME'))).toBeVisible();

    // Exist
    await element(by.id('dialogInput')).replaceText('abc');
    await element(by.text('RENAME')).tap();
    await expect(element(by.text('RENAME'))).toBeVisible();

    await element(by.text('CANCEL')).tap();
    await device.pressBack();
  });

  // Check delete playlist //
  // TC 32, 33, 34, 35, 36
  it('should able to delete playlist ', async () => {
    await device.reloadReactNative();
    await element(by.id('libraryTab')).tap();
    await element(by.text('Playlists')).tap();

    await expect(element(by.id('showOptionButton1'))).toBeVisible();
    await element(by.id('showOptionButton1')).tap();
    await expect(element(by.text('Rename'))).toBeVisible();
    await expect(element(by.text('Delete'))).toBeVisible();

    await element(by.text('Delete')).tap();
    await expect(element(by.text('CANCEL'))).toBeVisible();
    await expect(element(by.text('DELETE'))).toBeVisible();

    await element(by.text('CANCEL')).tap();
    await expect(element(by.text('CANCEL'))).not.toBeVisible();
    await expect(element(by.text('DELETE'))).not.toBeVisible();

    await element(by.text('Delete')).tap();
    await element(by.text('CANCEL')).multiTap(2);
    await expect(element(by.text('CANCEL'))).not.toBeVisible();
    await expect(element(by.text('DELETE'))).not.toBeVisible();

    await element(by.text('Delete')).tap();
    await expect(element(by.text('DELETE'))).toBeVisible();
    await element(by.text('DELETE')).tap();
    await expect(element(by.text('Rename'))).not.toBeVisible();
    await expect(element(by.text('Delete'))).not.toBeVisible();
  });
});
