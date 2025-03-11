export default function validateForm(order) {
    const errors = {};

    // Validate name
    if (!order.name || order.name.trim() === '') {
        errors.name = "Name required.";
    }
    // validate email
    if (!order.email || order.email.trim() === '') {
        errors.email = "Email required.";
    }

    // validate message
    if (!order.message || order.message.trim() === '') {
        errors.message = "Message required.";
    }
    // Validate event
    if (!order.event || order.event.trim() === '') {
        errors.event = "Event type required.";
    }

    return {
        isValid: Object.keys(errors).length === 0,
        errors: errors
    };
}
