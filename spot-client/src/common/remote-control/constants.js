/**
 * An enumeration of supported commands Spot can processes. All values are from
 * events triggered by the jitsi meet iframe api.
 */
export const COMMANDS = {

    /**
     * Adjust the volume 'up' or 'down'.
     */
    ADJUST_VOLUME: 'adjustVolume',

    /**
     * Proceed to a given meeting name or meeting URL.
     */
    GO_TO_MEETING: 'goToMeeting',

    /**
     * End the current meeting.
     */
    HANG_UP: 'hangup',

    /**
     * Set audio mute on or off.
     */
    SET_AUDIO_MUTE: 'setAudioMute',

    /**
     * Start the screensharing flow or stop screensharing.
     */
    SET_SCREENSHARING: 'setScreensharing',

    /**
     * Enter or exit tile view layout.
     */
    SET_TILE_VIEW: 'setTileView',

    /**
     * Set video mute on or off.
     */
    SET_VIDEO_MUTE: 'setVideoMute',

    /**
     * Send the meeting rating and the entered feedback.
     */
    SUBMIT_FEEDBACK: 'submitFeedback'
};

/**
 * An enumeration of custom connection-related events that can be emitted.
 */
export const CONNECTION_EVENTS = {

    /**
     * A Spot-TV has is no longer available.
     */
    SPOT_TV_DISCONNECTED: 'spot-tv-disconnected'
};

/**
 * An enumeration of custom namespaces to use for iqs.
 */
export const IQ_NAMESPACES = {

    /**
     * The type of iq which should trigger a direction action in response.
     */
    COMMAND: 'jitsi-meet-spot-command',

    /**
     * The type of iq which should trigger passing along of a message.
     */
    MESSAGE: 'jitsi-meet-spot-message'
};

/**
 * How long to wait for an ack until considering an iq to have timed out.
 */
export const IQ_TIMEOUT = 5000;

/**
 * An enumneration of supported messages that can be sent between Spot and
 * remote control instances.
 */
export const MESSAGES = {

    /**
     * A message about wireless screensharing from Jitsi-Meet to a remote
     * control, sent by proxy by Spot.
     */
    JITSI_MEET_UPDATE: 'update-message-from-jitsi-meet',

    /**
     * A message from a remote control to Spot that is intended for Spot to
     * pass into the Jitsi-Meet meeting.
     */
    REMOTE_CONTROL_UPDATE: 'update-message-from-remote-control',

    SPOT_REMOTE_LEFT: 'spot-remote-left',

    SPOT_REMOTE_PROXY_MESSAGE: 'spot-remote-message'
};

export const SERVICE_UPDATES = {
    /**
     * An update to the room join code, triggered locally, has been successfully
     * completed.
     */
    JOIN_CODE_CHANGE: 'join-code-change',

    /**
     * A command from a Spot-Remote has been received.
     */
    SPOT_REMOTE_MESSAGE_RECEIVED: 'message-received',

    /**
     * The remote control service has received an updated Spot-TV state.
     */
    SPOT_TV_STATE_CHANGE: 'spot-tv-state-change',

    /**
     * The remote control service has lost the XMPP connection and cannot
     * automatically reconnect.
     */
    UNRECOVERABLE_DISCONNECT: 'unrecoverable-disconnect'
};
